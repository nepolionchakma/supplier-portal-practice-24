import { FiDownloadCloud, FiDribbble, FiInbox, FiList, FiMenu, FiPlus, FiSend, FiUser, FiUserPlus, FiUsers, FiX } from 'react-icons/fi';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { NavLink, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '@/Supabase/AuthContext';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useSocket } from '@/Chat/SocketContext';
import { useAuthContext } from '@/Supabase/AuthContext';


function Notifications() {
  const [isActive, setIsActive] = useState(0)

  // --------------------------------------
  const socket = useSocket();
  const { session, allUserData, messageData, tosifySuccess, tosifyWarm } = useAuthContext()
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const [messages, setMessages] = useState([]);
  const [receiverIds, setReceiverIds] = useState('');
  const [status, setStatus] = useState('sent');
  const [selectId, setSelectId] = useState('')
  // --------------------------------------

  useEffect(() => {
    if (socket == null || session == null) return;

    socket.emit('login', session.user.id);

    socket.on('receiveMessage', (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => socket.off('receiveMessage');
  }, [socket, session]);



  const sendMessage = async (info) => {
    const senderId = session.user.id;
    const receiverIdArray = receiverIds.split(',').map(id => id.trim());

    if (info === 'draft') {
      const { data, error } = await supabase
        .from('messages')
        .insert(receiverIdArray.map(receiverId => ({
          sender_id: senderId,
          receiver_id: receiverId,
          subject,
          message,
          status: info
        })))
        .select()
      tosifySuccess('draft success')

    } else if (status === 'sent') {

      const { data, error } = await supabase
        .from('messages')
        .insert(receiverIdArray.map(receiverId => ({
          sender_id: senderId,
          receiver_id: receiverId,
          subject,
          message,
          status: info
        })))
        .select()
      tosifySuccess('Message sent.')
      console.log(data, error, 'sent')
    } else {
      socket.emit('sendMessage', { senderId, receiverIds: receiverIdArray, message });
    }

    setMessages((prev) => [...prev, { senderId, message }]);
    setMessage('');
  };

  const fetchMessages = async (route) => {
    const { data, error } = await fetch(`http://localhost:5000/${route}`, {
      headers: {
        Authorization: `Bearer ${session.access_token}`
      }
    }).then(res => res.json());
    if (error) {
      console.error(`Error fetching ${route} messages:`, error);
    } else {
      setMessages(data);
    }
  };

  if (session == null) return <div>Loading...</div>;


  const navLinks = [
    {
      name: 'Inbox',
      icon: <FiInbox className='text-2xl' />,
      link: 'inbox'
    },
    {
      name: 'Send',
      icon: <FiSend className='text-2xl' />,
      link: 'send'
    },
    {
      name: 'Draft',
      icon: <FiDownloadCloud className='text-2xl' />,
      link: 'draft'
    }
  ]
  return (
    <div className='max-w-full h-screen'>
      <h4 className='text-center'>Notifications</h4>
      <div className='flex flex-col justify-between'>
        <div className="flex gap-4 p-4">
          <div className='flex flex-col gap-4 '>
            {
              navLinks.map((item, index) => (
                <NavLink
                  to={item.link}
                  key={index}
                  onClick={() => setIsActive(index)}
                  className={'mix-w-min text-slate-600 font-bold hover:bg-slate-200 px-8 py-3 rounded transition-all duration-500 shadow ' + (isActive == index ? 'bg-slate-200 text-slate-900 font-bold' : '')}
                >
                  <div className='flex gap-3 items-center'>{item.icon} {item.name}</div>
                </NavLink>
              ))
            }
          </div>
          <div className='w-[80%]'>
            <Outlet />
          </div>

          {/* <div className=''>
          <div className={tabIndex == 0 ? 'visible' : 'hidden'}>hello1</div>
          <div className={tabIndex == 1 ? 'visible' : 'hidden'}>hello2</div>
          <div className={tabIndex == 2 ? 'visible' : 'hidden'}>hello3</div>
        </div> */}
        </div>
        <div className=' '>
          <AlertDialog>
            <AlertDialogTrigger>
              <div className='bg-slate-400 rounded py-1 px-2 flex gap-2 items-center' >
                <FiPlus /> <span> New Compose</span>
              </div>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                {/* <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action .
                </AlertDialogDescription> */}
                <Card>
                  <CardHeader>
                    <CardTitle>Create a Message</CardTitle>
                    {/* <CardDescription>Card Description</CardDescription> */}
                  </CardHeader>
                  <CardContent>
                    <div className='flex flex-col gap-3'>
                      <select
                        value={receiverIds}
                        onChange={(e) => setReceiverIds(e.target.value)}
                        className='w-full border border-slate-950 rounded px-4 py-1'
                      >
                        <option value="">Select User</option>
                        {
                          allUserData.map(u => (
                            <option key={u.id} value={u.id}>{u.first_name} {u.last_name}</option>
                          ))
                        }
                      </select>

                      <input
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="Subject"
                        className='w-full border border-slate-950 rounded px-4 py-1'
                      />

                      <textarea
                        rows="4" cols="50"
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type a message"
                        className='w-full border border-slate-950 rounded px-4 py-1'
                      />
                    </div>
                    {/* <select onChange={(e) => setStatus(e.target.value)} value={status} className='my-2 rounded border border-slate-950'>
                      <option value="sent">Send</option>
                      <option value="draft">Save as Draft</option>
                    </select>
                    <br /> */}
                    {/* <button className='bg-slate-400 rounded px-2' onClick={sendMessage}>{status === 'sent' ? 'Send' : 'Save Draft'}</button> */}
                  </CardContent>
                  {/* <CardFooter>
                    <p>Card Footer</p>
                  </CardFooter> */}
                </Card>

              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel onClick={() => sendMessage('draft')}>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={() => sendMessage('sent')}>Send</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>



        </div>
      </div>
    </div>
  )
}
export default Notifications
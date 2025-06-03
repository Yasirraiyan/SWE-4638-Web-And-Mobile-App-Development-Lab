import React, { useState } from 'react';  
// React লাইব্রেরি থেকে useState নামের hook টি ইম্পোর্ট করছি। 
// useState দিয়ে আমরা component এর মধ্যে state মান রাখতে পারি। 

import "./styles.css";  
// বাইরের একটা CSS ফাইল ইম্পোর্ট করছি, যেখানে স্টাইল সংজ্ঞায়িত করা হয়েছে। 

function TodoInput() {  
  // React এর ফাংশনাল কম্পোনেন্ট ডিক্লেয়ার করছি। 
  // প্রতিটা কম্পোনেন্ট একটা ফাংশন, যা JSX রিটার্ন করে UI তৈরি করে। 

  const [task, setTask] = useState('');  
  // task নামের একটা state ডিফাইন করছি, যার ডিফল্ট মান ফাঁকা স্ট্রিং। 
  // setTask হল এই state আপডেট করার ফাংশন। 
  // task: যেই ইনপুট ফিল্ডে ইউজার লিখবে, সেটা ধরে রাখবে। 

  const [tasks, setTasks] = useState([]);  
  // tasks নামের আরেকটা state ডিফাইন করছি, যেটা একটা অ্যারে। 
  // এই অ্যারেতে ইউজারের সব টাস্ক সংরক্ষিত থাকবে। 

  const handleChange = (e) => {  
    setTask(e.target.value);  
    // ইনপুট ফিল্ডের ভ্যালু পরিবর্তন হলে এই ফাংশন কল হবে। 
    // e.target.value হচ্ছে ইনপুটের বর্তমান মান, সেটাকে task state এ রাখছি। 
  };

  const handleAdd = () => {  
    if (task.trim() !== '') {  
      // task যদি ফাঁকা না হয়, তখনই নতুন টাস্ক অ্যাড করবো। 
      setTasks([...tasks, task]);  
      // পুরানো tasks এর সব এলিমেন্ট নিয়ে নতুন task যোগ করছি। 
      alert(`Task added: ${task}`);  
      // ইউজারকে একটা এলার্ট দেখাচ্ছি টাস্ক যোগ হয়েছে বলে। 
      setTask('');  
      // ইনপুট ফিল্ড খালি করে দিচ্ছি। 
    }
  };

  const handleRemove = (index) => {  
    // এখানে একটা সমস্যা আছে — এই ফাংশন কল করার সময় কোন index দিবে? 
    // তোমার Remove বাটনে কোনো index পাঠানো হয় না, তাই এটা কাজ করবে না। 

    const updatedTasks = [...tasks];  
    // tasks এর কপি নিচ্ছি, কারণ সরাসরি state মিউটেট করা উচিত নয়। 
    updatedTasks.splice(index, 1);  
    // নির্দিষ্ট index এর টাস্ক রিমুভ করছি। 
    setTasks(updatedTasks);  
    // আপডেটেড অ্যারে দিয়ে state আপডেট করছি। 
  };

  return (  
    <div>  
      <h1>Interactive Task Manager</h1>  
      <label>Enter your task:</label>  
      <input  
        type="text"  
        placeholder="Enter your task"  
        value={task}  
        onChange={handleChange}  
      />  
      <br />  
      <br />  
      <button onClick={handleAdd}>Add</button>  

      <ol type="i">  
        {tasks.map((t, index) => (  
          <li key={index}>  
            {t}  
            {/* প্রতিটি টাস্কের পাশে রিমুভ করার জন্য একটা বাটন দেয়া ভালো হবে, এখানে দেয়া হয় নি */}
          </li>  
        ))}  
      </ol>  

      <button onClick={handleRemove}>Remove</button>  
      {/* এই বাটন এখন কাজ করবে না কারণ handleRemove কে কোন index দেয়া হয় নি */} 
    </div>  
  );  
}

export default TodoInput;  
// এই কম্পোনেন্টটা অন্য ফাইলে ব্যবহার করার জন্য এক্সপোর্ট করছি। 
import React, { useState } from 'react'; // React ও State hook ইম্পোর্ট

function ComponentName() { // কম্পোনেন্ট ফাংশন
  // State ডিফাইন
  // Event handler / function ডিফাইন

  return (
    <JSX> {/* UI ডিজাইন JSX আকারে */}</JSX>
  );
}

export default ComponentName; // এক্সপোর্ট


 function saveToLocalStorage(event){
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.emailId.value;

    const obj ={
      name,
      email
    }
    // localStorage.setItem(obj.email, JSON.stringify(obj));
    axios.post("https://crudcrud.com/api/ed3b65b9bdb0404496477ac50a01834f/AppointmentData",obj)
    .then((response) =>{
      showNewUserOnScreen(response.data)
      console.log(response)
    })
    .catch((err)=>{
      console.log(err)
    })
    // showNewUserOnScreen(obj)
  }
axios.post("https://crudcrud.com/api/ed3b65b9bdb0404496477ac50a01834f/AppointmentData",obj)
    .then((response) =>{
      showNewUserOnScreen(response.data)
      console.log(response)
    }) 
    .catch((err)=>{

      console.log(err)
    })
  function showNewUserOnScreen(user){
    const parentNode = document.getElementById('items');
      const childHTML = `<li id =${user.id}> ${user.name} - ${user.email} <button onclick=deleteUser('${user.id}')> Delete Data 
      </button> <button onclick =editUserDetails('${user.id}','${user.name}' ,${user._id})> Edit Data</button></li>`
      parentNode.innerHTML = parentNode.innerHTML+childHTML;
    
  }
  function deleteUser(userId){
   function deleteUser(userId){
        axios.delete(`https://crudcrud.com/api/ed3b65b9bdb0404496477ac50a01834f/AppointmentData/${userId}`)
        .then((response) => {
          removeUserFromScreen(userId)
        })
        .catch((err) => {
          console.log(err)
        })
   // localStorage.removeItem(emailId)
   // removeUserFromScreen(emailId)
  }
  function removeUserFromScreen(userId){
    const parentNode = document.getElementById('items');
    const childNodeToBeDeleted = document.getElementById(userId);
    parentNode.removeChild(childNodeToBeDeleted);
  }

//   function editUserDetails(email,username)
//   {
//      document.getElementById('name').value = username;
//      document.getElementById('email').value = emailId;
//      deleteUser(emailId)
//   }
 
  function editUserDetails(emailId,username,userId)
  {
     document.getElementById('name').value = username;
     document.getElementById('email').value = emailId;
     deleteUser(emailId)
  }

function saveToLocalStorage(event){
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.emailId.value;

    const obj ={
      name,
      email
    }
    localStorage.setItem(obj.email, JSON.stringify(obj));
    showNewUserOnScreen(obj)
  }
  function showNewUserOnScreen(user){
    const parentNode = document.getElementById('items');
      const childHTML = `<li id =${user.email}> ${user.name} - ${user.email} <button onclick=deleteUser('${user.email}')> Delete Data 
      </button> <button onclick =editUserDetails('${user.email}','${user.name}' )> Edit Data</button></li>`
      parentNode.innerHTML = parentNode.innerHTML+childHTML;
    
  }
  function deleteUser(emailId){
    localStorage.removeItem(emailId)
    removeUserFromScreen(emailId)
  }
  function removeUserFromScreen(emailId){
    const parentNode = document.getElementById('items');
    const childNodeToBeDeleted = document.getElementById(emailId);
    parentNode.removeChild(childNodeToBeDeleted);
  }

  function editUserDetails(emailId , name)
  {
     document.getElementById('name').value = username;
     document.getElementById('email').value = emailId
     deleteUser(emailId)
  }

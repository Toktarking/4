

var input = document.getElementsByTagName('input');
var login = document.getElementById('enter');
var form = document.querySelector('form');
form.onsubmit = ()=> {return false};


const users = [
    {
        username: 'toktar',
        password: '123123'
    },
    {
        username: 'aidar',
        password: '123123'
    },
    {
        username: 'yerkin',
        password: '123123'
    },
    {
        username: 'temirlan',
        password: '123123'
    },
    {
        username: 'saida',
        password: '1999'
    },

];

/*
login.onclick = ()=> {
    if ((input[0].value !="") && (input[1].value !=""))
    {
        if ((input[0].value == sessionStorage.getItem("username")) && (input[1].value == sessionStorage.getItem("password")))
        {
            form.onsubmit = ()=> {return 1};
        }
        else
        {
           if ((input[0].value != sessionStorage.getItem("username")))
           {
            input[0].nextElementSibling.textContent = "Username NOT match";
            setTimeout(()=> {
                input[0].nextElementSibling.textContent = ""
            }, 2000);
           };
           if ((input[1].value != sessionStorage.getItem("password")))
           {
            input[1].nextElementSibling.textContent = "Password NOT match";
            setTimeout(()=> {
                input[1].nextElementSibling.textContent = ""
            }, 2000);
           }

        }
    }
    else
    {
        if (input[0].value == "")
        {
            input[0].nextElementSibling.textContent = "Username is empty";
            setTimeout(()=> {
                input[0].nextElementSibling.textContent = ""
            }, 2000);
        }
        if (input[1].value == "")
        {
            input[1].nextElementSibling.textContent = "Password is empty";
            setTimeout(()=> {
                input[1].nextElementSibling.textContent = ""
            }, 2000);
        }
    }
};

*/



/*
var form = document.querySelector('form');
var input = document.getElementsByTagName('input');
var login = document.getElementById('login');
form.onsubmit = () => {return false};
*/


var user_found = false;




function logging(name, pass) {
  for (let i=0; i<users.length; i++) {
    //console.log(users[i].username);
    if ((name == users[i].username) && (pass == users[i].password)) {
        //console.log("It's all right!");
        user_found = true;
        sessionStorage.setItem('user', input[0].value);

    };
  };
  if (user_found == false) {
    console.log("Who are u bro? go home u r drunk!");
    pass.innerHTML = "";
  } else {

    console.log(`Oh, ${name}, bro is that u? Welcome to the club!`);
    var user = sessionStorage.getItem('user');
    window.location.href = `${user}.html`;
    user_found = false;
  }


}





login.onclick = ()=> {

    if (input[0].value == "")
        {
            input[0].nextElementSibling.textContent = "Username is empty";
            setTimeout(()=> {
                input[0].nextElementSibling.textContent = ""
            }, 2000);
        }
    else if (input[1].value == "")
        {
            input[1].nextElementSibling.textContent = "Password is empty";
            setTimeout(()=> {
                input[1].nextElementSibling.textContent = ""
            }, 2000);
        }
    else if (user_found = false)
        {
            input[1].nextElementSibling.textContent = "Password or username NOT match";
            setTimeout(()=> {
                input[1].nextElementSibling.textContent = ""
            }, 2000);
        }
    else {
        logging(input[0].value, input[1].value);
    }

    input[0].value = ""
    input[1].value = ""
}








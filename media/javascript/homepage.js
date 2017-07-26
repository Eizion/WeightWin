function submit(){

    var inputs = document.getElementsByTagName('input');

    for(i=0;i<inputs.length;i++)
    {
        console.log(inputs[i].value);


        if(inputs[i].type != 'button')
        {
            localStorage.setItem(inputs[i].id,inputs[i].value);
        }

    }

}


function check() {

    if(localStorage.length >0)
    {

        var docText = "<b>You have accessed this form previously with the following information.";
        docText = docText + "Would you like to change this information or clear it ? To clear hit Reset Form.</b>";
        document.getElementById("message").innerHTML = docText;


        for(i=0;i<localStorage.length;i++)
        {
            key = localStorage.key(i);
            lsValue = localStorage.getItem(key);
            console.log(key + " " + lsValue);

            document.getElementById(key).value = lsValue;

        }

    }

}



function clearFormAndLs()
{

    var inputs = document.getElementsByTagName('input');

    for(i=0;i<inputs.length;i++)
    {
        console.log(inputs[i].value);


        if(inputs[i].type != 'button')
        {
            document.getElementById(inputs[i].id).value = '';
        }
    }

    localStorage.clear();
    document.getElementById("message").innerHTML = "";

}

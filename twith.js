let noteList = [];
let editing = true;

document.onkeydown = checkKey;

function checkKey(e) {
    var evtobj = window.event? event : e

    if (evtobj.key == 'n')  {
        if(!editing) {
            console.log('switching to new mode');
            document.getElementById('main-note').style.display = 'none';
            document.getElementById('main-edit').style.display = 'block';
            document.getElementById('main-edit').focus();

            editing = true;
        }
        event.preventDefault();
        return false;
    }

    if (evtobj.key == 'e')  {
        if(!editing) {
            console.log('switching to edit mode');
            document.getElementById('main-note').style.display = 'none';
            document.getElementById('main-edit').style.display = 'block';
            document.getElementById('main-edit').value = document.getElementById('main-note').innerHTML;


            document.getElementById('main-edit').focus();

            editing = true;
        }
        event.preventDefault();
        return false;
    }
     
    if (evtobj.key == 'Escape')  {
        if (editing){

            noteList.push(document.getElementById('main-edit').value);
            console.log(noteList);

            console.log('switching to view mode');

            let editText = document.getElementById('main-edit').value;
            document.getElementById('main-note').innerHTML = editText;

            document.getElementById('main-edit').value = '';
            
            document.getElementById('main-note').style.display = 'block';
            document.getElementById('main-edit').style.display = 'none';
            editing = false;
        }
    }
    if (evtobj.key == 'ArrowRight' && evtobj.altKey)  {
        console.log('right')
        if (editing) {
            noteList.push(document.getElementById('main').value);
            document.getElementById('main-edit').value = '';
            console.log(noteList);
    
        }
    }
}

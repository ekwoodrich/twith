let noteList = [];
let editing = true;
let creating = true;

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

document.onkeydown = checkKey;

function checkKey(e) {
    var evtobj = window.event? event : e

    if (evtobj.key == 'n')  {
        console.log('switching to new mode');
        document.getElementById('main-note').style.display = 'none';
        document.getElementById('main-edit').style.display = 'block';
        document.getElementById('main-date').style.visibility = 'hidden';

        document.getElementById('main-edit').focus();

        creating = true;
        event.preventDefault();
        return false;
    }

    if (evtobj.key == 'e')  {
        if(!editing) {
            console.log('switching to edit mode');
            document.getElementById('main-note').style.display = 'none';
            document.getElementById('main-edit').style.display = 'block';
            document.getElementById('main-date').style.visibility = 'hidden';

            document.getElementById('main-edit').value = document.getElementById('main-note').innerHTML;


            document.getElementById('main-edit').focus();

            editing = true;
        }
        event.preventDefault();
        return false;
    }
     
    if (evtobj.key == 'Escape')  {
            
            var dateobj = new Date(); 
            if (creating){
                noteList.push({'uuid': uuidv4(), created_on: dateobj.toISOString(), edited_on: dateobj.toISOString(),'body' : document.getElementById('main-edit').value});
                creating=false;
            }
            console.log(noteList);

            console.log('switching to view mode');

            let editText = document.getElementById('main-edit').value;
            document.getElementById('main-note').innerHTML = editText;

            document.getElementById('main-edit').value = '';
            
            document.getElementById('main-note').style.display = 'block';
            document.getElementById('main-edit').style.display = 'none';
            document.getElementById('main-date').style.visibility = 'visible';
            editing = false;
        
    }
    if (evtobj.key == 'ArrowRight' && evtobj.altKey)  {
        console.log('right')
        if (editing) {
            noteList.push({'uuid': uuidv4(), 'body' : document.getElementById('main').value});
            document.getElementById('main-edit').value = '';
            console.log(noteList);
        }
    }
}

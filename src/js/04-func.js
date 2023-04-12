
export {addStorage,onSubmitClear,reloadForm}

const inputForm = document.querySelector('.feedback-form')

const STORAGE_FORM_KEY = "feedback-form-state";

function addStorage(e) {
   
    if (e.target.name === 'email' || e.target.name === 'message') {
    //  console.log(e.target.name)
      let userValues = localStorage.getItem(STORAGE_FORM_KEY);
      userValues = userValues ? JSON.parse(userValues) : {};
        userValues[e.target.name] = e.target.value;
       
      localStorage.setItem(STORAGE_FORM_KEY, JSON.stringify(userValues));
    }

}


function onSubmitClear(e) {
    e.preventDefault();
    inputForm.reset();
    console.log(JSON.parse(localStorage.getItem(STORAGE_FORM_KEY)));
    localStorage.removeItem(STORAGE_FORM_KEY);
}

function reloadForm() {
    // let storageValueReload = localStorage.getItem(STORAGE_FORM_KEY);
    
    // if (storageValueReload) {
    //     storageValueReload = JSON.parse(storageValueReload);
        
    //     Object.entries(storageValueReload).forEach(([name, value]) => {
    //         inputForm.elements[name].value = value;
    //     })
    // }
    inputForm.elements.message.value = JSON.parse(localStorage.getItem(STORAGE_FORM_KEY))?.message  || "";
    inputForm.elements.email.value = JSON.parse(localStorage.getItem(STORAGE_FORM_KEY) )?.email  || "";
    
}
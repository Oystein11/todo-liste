// HTML-linker
const input_text = document.querySelector ("#input_text_ID");
const submit_task = document.querySelector ("#submit_task_ID");
const task_list = document.querySelector ("#task_list_ID");
const todo_form = document.querySelector ("#todo_form_ID");

//Funksjoner
// Legger til tekst som listeelementer, en sletteknapp ved siden av, og lagrer den lokalt
function add_task () {
    if (input_text.value) {
        const new_task = document.createElement ("li");
        const delete_button = document.createElement ("button");
        delete_button.textContent = "🗑️";

        new_task.textContent = input_text.value;
        task_list.appendChild (new_task);
        new_task.appendChild (delete_button);
    } else {
        alert ("Legg til et element først."), console.log ("Legg til et element først.")
    }

//    save_data ();
}


// Fjerner et listeelement fra listen
task_list.addEventListener ("click", function (event) {
    event.target.tag_name === "BUTTON" && event.target.parentElement.remove ();
//    save_data ();
});

// Forhindrer siden fra å refreshe
todo_form.addEventListener ("submit", function (event) {
    event.preventDefault ();
    add_task ();
});

// Lagrer listen lokalt
//function save_data () {
//    localStorage.setItem ("task_list", task_list.innerHTML);
//}

// Laster inn lokal lagret data
//function load_data () {
//    task_list.innerHTML = localStorage.getItem ("task_list");
//}
//load_data();
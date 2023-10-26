// HTML-linker
const input_text = document.querySelector ("#input_text_ID");
console.log (input_text);
const submit_task = document.querySelector ("#submit_task_ID");
console.log (submit_task);
const task_list = document.querySelector ("#task_list_ID");
console.log (task_list);
const todo_form = document.querySelector ("#todo_form_ID");
console.log (todo_form);

//Funksjoner
// Legger til tekst som listeelementer, en sletteknapp ved siden av, og lagrer den lokalt
function add_task () {
    if (input_text.value) {
        const new_task = document.createElement ("li");
        new_task.style.color= "white";
        console.log (new_task);
        const delete_button = document.createElement ("button");
        delete_button.textContent = "🗑️";
        console.log (delete_button);

        new_task.textContent = input_text.value;
        task_list.appendChild (new_task);
        new_task.appendChild (delete_button);
    } else {
        alert ("Legg til et element først."), console.log ("Legg til et element først.")
    }

    save_data ();
}


// Fjerner et listeelement fra listen
task_list.addEventListener ("click", function (event) {
    event.target.tagName === "BUTTON" && event.target.parentElement.remove ();
    save_data ();
});

// Fjerner alle listeelementer fra listen
function remove_all () {

}

// Forhindrer siden fra å refreshe
todo_form.addEventListener ("submit", function (event) {
    event.preventDefault ();
    add_task ();
});

// Lagrer listen lokalt
function save_data () {
    localStorage.setItem ("task_list", task_list.innerHTML);
}

// Laster inn lokal lagret data
function load_data () {
    task_list.innerHTML = localStorage.getItem ("task_list");
}
load_data();

// Legger inn autentisering
// Lag en bruker


//Innlogging for bruker


//Legger inn databasefunksjonalitet
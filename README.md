_Premessa_: Stai sviluppando un form di registrazione per una piattaforma dedicata ai giovani sviluppatori web. Gli utenti devono iscriversi indicando le loro competenze e specializzazioni.

# Milestone 1: Creare un Form con Campi Controllati

1. Crea un form di registrazione con i seguenti campi controllati (gestiti con useState):

- Nome completo (input di testo)
- Username (input di testo)
- Password (input di tipo password)
- Specializzazione (select con opzioni: "Full Stack", "Frontend", "Backend")
- Anni di esperienza (input di tipo number)
- Breve descrizione sullo sviluppatore (textarea)

2. Aggiungi una validazione al submit, verificando che:

- Tutti i campi siano compilati
- L'input Anni di esperienza sia un numero positivo
- La Specializzazione sia selezionata

3. Al submit, se il form è valido, stampa in console i dati.

# Milestone 2: Validare in tempo reale

1. Aggiungere la validazione in tempo reale dei seguenti campi:

- Username: Deve contenere solo caratteri alfanumerici e almeno 6 caratteri (no spazi o simboli).
- Password: Deve contenere almeno 8 caratteri, 1 lettera, 1 numero e 1 simbolo.
- Descrizione: Deve contenere tra 100 e 1000 caratteri (senza spazi iniziali e finali).

Suggerimento: Per semplificare la validazione, puoi definire tre stringhe con i caratteri validi e usare .includes() per controllare se i caratteri appartengono a una di queste categorie:
const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&\*()-\_=+[]{}|;:'\\",.<>?/`~";

2. Per ciascuno dei campi validati in tempo reale, mostrare un messaggio di errore (rosso) nel caso non siano validi, oppure un messaggio di conferma (verde) nel caso siano validi.

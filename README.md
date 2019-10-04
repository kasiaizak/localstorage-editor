# LocalStorage Editor

Prosta strona pokazująca przechowywanie wprowadzonego tekstu przez użytkownika w lokalnej pamięci komputera. Przycisk *Save* zapisuje tekst do pamięci, przycisk *Load* przywraca ten tekst po odświeżeniu strony, bądź po zamknięciu okna przeglądarki.

Wygląd strony zaprojektowany w [Figmie](https://www.figma.com/) przy użyciu [Product Design Kit 1.0](https://pdkit.co/), a następnie przeniesiony na kod. Animowana tęczowa ramka może wyglądać inaczej, niż na zrzucie ekranowym, w zależności od używanej przeglądarki ze względu na różnice we wspieraniu właściwości *conic-gradient* - [widok on-line](https://kasiaizak.github.io/localstorage-editor/)

## Wykorzystane technologie

HTML5, CSS3 (w tym flex) z użyciem preprocesora SASS oraz JavaScript.

## Podgląd strony

![Screenshot](https://raw.githubusercontent.com/kasiaizak/localstorage-editor/master/github/screenshot.png)

## Uruchomienie strony lokalnie z podglądem zmian na żywo (dla developerów korzystających z Node.js)

Jeśli nie masz jeszcze zainstalowanego Node.js to nic straconego... :) Tu znajduje się instalka i można szybko to nadrobić: [oficjalna strona Node.js](https://nodejs.org/en/).

W konsoli (terminalu) wpisujemy poniższe polecenie w celu instalacji tzw. *task runnera* GULP. Polecenie wykonujemy raz na danej maszynie, czyli jeśli robiłeś/aś to już wcześniej to pomiń ten krok i poniższą komendę. Ważne: na Windowsie terminal uruchamiamy z uprawnieniami administratora.

`npm install -g gulp-cli`

### Inicjowanie projektu

Po sklonowaniu repozytorium na swój komputer wchodzimy do głównego katalogu projektu i wykonujemy poniższe polecenia:

`npm install` - polecenie uruchamiane raz na dany projekt

### Podgląd na żywo ze śledzeniem zmian

`gulp` - start *task runnera*

#### Kończenie pracy

Aby przerwać pracę *gulp* wciskamy kombinację klawiszy **CTRL** + **C**.

import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import { TiInfoLarge } from "react-icons/ti";
import { BiCookie } from "react-icons/bi";

const RodoPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Wrapper>
      <div className="title">
        <h1>
          <TiInfoLarge />
        </h1>
        <h2>
          {" "}
          <TiInfoLarge />
        </h2>
        <h3>
          {" "}
          <TiInfoLarge />
        </h3>

        <h2 data-aos="fade-up">
          rodo i cookies <br />
        </h2>
        <h3>
          {" "}
          <BiCookie />
        </h3>
        <h2>
          {" "}
          <BiCookie />
        </h2>
        <h1>
          {" "}
          <BiCookie />
        </h1>
      </div>
      <h4>RODO</h4>
      <div className="content">
        <h3>Szanowni Państwo,</h3>
        <p>
          Zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE)
          2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych
          w związku z przetwarzaniem danych osobowych i w sprawie swobodnego
          przepływu takich danych oraz uchylenia dyrektywy 95/46/WE
          (Rozporządzenie ogólne o ochronie danych, zwane dalej: RODO), Apart
          Hotel Miodowa informuje, że:
        </p>
        <p>
          1. Administratorem Pani/Pana danych osobowych jest Eko – Test
          Szczakowa Spółka z ograniczoną odpowiedzialnością Nieruchomości Spółka
          Komandytowa z siedzibą przy ul. Szklarkiej 5, 43-602 Jaworzono,
          kontakt e mail: biuro@aparthotelmiodowa.pl .
        </p>
        <p>
          2. Administrator wyznaczył Inspektora ochrony danych osobowych Jerzego
          Gorę, z którym może Pani/Pan skontaktować się poprzez e-mail:
          biuro@aparthotelmiodowa.pl lub pisemnie na adres siedziby
          Administratora. Z inspektorem ochrony danych osobowych można
          kontaktować się we wszystkich sprawach dotyczących przetwarzania
          danych osobowych oraz korzystania z praw związanych z przetwarzaniem
          danych.
        </p>
        <p>
          3. Pani/Pana dane osobowe przetwarzane będą na podstawie Art. 6 ust. 1
          lit. b, f RODO – przetwarzanie jest niezbędne do wykonania umowy,
          której stroną jest osoba, której dane dotyczą, lub do podjęcia działań
          na żądanie osoby, której dane dotyczą, przed zawarciem umowy; prawnie
          uzasadniony interes realizowany przez administratora danych.
        </p>
        <p>
          4. Pani/ Pana dane osobowe przetwarzane będą w celu realizacji umowy
          noclegu, a w szczególności: wystawienia niezbędnych dokumentów
          skorzystania z naszych usług (kart meldunkowej, faktury, paragonu)
          oraz dokonywania płatności gotówkowych i bezgotówkowych, obsługi
          zgłoszeń które są kierowane drogą telefoniczną, mailową,
          wykorzystywania przez nas danych kontaktowych w celu związanym ze
          świadczeniem usług wynikających z zawartej umowy świadczenia usług,
          obsługi reklamacji i skarg – jeżeli zostaną złożone; w celach
          podatkowych i rachunkowych, W zakresie danych gromadzonych przez
          monitoring celem jest zapewnienie bezpieczeństwa osób przebywających
          na terenie monitorowanym (w tym bezpieczeństwa pracowników) oraz
          ochrona mienia, ochrona przeciwpożarowa i przeciw-powodziowa.
        </p>
        <p>
          5. Prawnie uzasadnionym celem Administratora danych jest: prowadzenie
          własnych usług, podtrzymywania relacji z klientem, prowadzenie analiz
          statystycznych, zapewnienie obsługi płatniczej, windykacja należności,
          archiwizacja danych w celu zapewnienia rozliczalności i spełnienia
          obowiązków wynikających z przepisów prawa.
        </p>
        <p>
          6. Pani/Pana dane będą udostępniane podmiotom upoważnionym na
          podstawie powszechnie obowiązujących przepisów prawa bądź firmą
          świadczącym obsługę prawną.
        </p>
        <p>
          7. Pani/Pana dane osobowe będą przechowywane przez okres obowiązywania
          umowy z Państwem, a także po jej zakończeniu w celu: dochodzenia
          roszczeń w związki z wykonywaniem warunków umowy, wykonywania
          obowiązków wynikających z przepisów prawa w tym podatkowych i
          rachunkowych, zapobiegania nadużyciom i oszustwom, statystycznych i
          archiwizacyjnych, maksymalnie przez 6 lat od zakończenia wykonywania
          umowy o świadczenie usług.
        </p>
        <p>
          8. Pani/Pana dane osobowe w zakresie zapisu monitoringu będą
          przechowywane aż do nadpisania (w zależności od wielkości nagrań)
          maksymalnie do 30 dni lub do czasu prawomocnego zakończenia
          postępowania prowadzonego na podstawie prawa.
        </p>
        <p>
          9. Monitoring wizyjny obejmuje: recepcję hotelu, hol, korytarze,
          klatkę schodową, bar, jadalnie, wejścia do wind, wjazd do hotelu,
          teren zielony. Osoba, której dane są przetwarzane, ma prawo do żądania
          od administratora dostępu do danych osobowych, prawo do ich
          sprostowania, usunięcia lub ograniczenia przetwarzania, prawo do
          wniesienia sprzeciwu wobec przetwarzania, prawo do przenoszenia
          danych.
        </p>
        <p>
          10.W przypadku gdy przetwarzanie danych osobowych odbywa się na
          podstawie zgody osoby na przetwarzanie danych osobowych (art. 6 ust. 1
          lit a RODO), przysługuje jej prawo do cofnięcia tej zgody w dowolnym
          momencie.
        </p>
        <p>
          11. W przypadku powzięcia informacji o niezgodnym z prawem
          przetwarzaniu przez Administratora danych osobowych, przysługuje
          Pani/Panu prawo wniesienia skargi do organu nadzorczego tj. Prezesa
          Urzędu Ochrony Danych Osobowych.
        </p>
        <p>
          12. Podanie przez Panią/Pana danych osobowych jest obowiązkiem
          ustawowym, gdy przesłanką przetwarzania jest przepis prawa lub
          warunkiem koniecznym zawarcia umowy bądź załatwienia indywidualnej
          sprawy.
        </p>
        <p>
          13. Administrator nie przewiduje przetwarzania Pani/ Pana danych w
          sposób zautomatyzowany, w tym ich profilowania.
        </p>
        <p>
          14. Administrator nie przewiduje przekazywania Pani/ Pana danych do
          państw trzecich w rozumieniu RODO.
        </p>
      </div>
      <h4>Polityka Cookies</h4>
      <div className="content">
        <p>
          Serwis nie zbiera w sposób automatyczny żadnych informacji, z
          wyjątkiem informacji zawartych w plikach cookies.Pliki cookies (tzw.
          „ciasteczka”) stanowią dane informatyczne, w szczególności pliki
          tekstowe, które przechowywane są w urządzeniu końcowym Użytkownika
          Serwisu i przeznaczone są do korzystania ze stron internetowych
          Serwisu. Cookies zazwyczaj zawierają nazwę strony internetowej, z
          której pochodzą, czas przechowywania ich na urządzeniu końcowym oraz
          unikalny numer.
        </p>
        <p>
          Podmiotem zamieszczającym na urządzeniu końcowym Użytkownika Serwisu
          pliki cookies oraz uzyskującym do nich dostęp jest operator Serwisu –
          Eko – Test Szczakowa Spółka z ograniczoną odpowiedzialnością
          Nieruchomości Spółka Komandytowa z siedzibą przy ul. Szklarkiej 5,
          43-602 Jaworzono,
        </p>
        <p>
          Pliki cookies wykorzystywane są w celu: <br /> 1. Dostosowania
          zawartości stron internetowych Serwisu do preferencji Użytkownika oraz
          optymalizacji korzystania ze stron internetowych; w szczególności
          pliki te pozwalają rozpoznać urządzenie Użytkownika Serwisu i
          odpowiednio wyświetlić stronę internetową, dostosowaną do jego
          indywidualnych potrzeb; <br /> 2. Tworzenia statystyk, które pomagają
          zrozumieć, w jaki sposób Użytkownicy Serwisu korzystają ze stron
          internetowych, co umożliwia ulepszanie ich struktury i zawartości;
        </p>
        <p>
          W ramach Serwisu stosowane są dwa zasadnicze rodzaje plików cookies:
          „sesyjne” (session cookies) oraz „stałe” (persistent cookies). Cookies
          „sesyjne” są plikami tymczasowymi, które przechowywane są w urządzeniu
          końcowym Użytkownika do czasu wylogowania, opuszczenia strony
          internetowej lub wyłączenia oprogramowania (przeglądarki
          internetowej). „Stałe” pliki cookies przechowywane są w urządzeniu
          końcowym Użytkownika przez czas określony w parametrach plików cookies
          lub do czasu ich usunięcia przez Użytkownika.
        </p>
        <p>
          W wielu przypadkach oprogramowanie służące do przeglądania stron
          internetowych (przeglądarka internetowa) domyślnie dopuszcza
          przechowywanie plików cookies w urządzeniu końcowym Użytkownika.
          Użytkownicy Serwisu mogą dokonać w każdym czasie zmiany ustawień
          dotyczących plików cookies. Ustawienia te mogą zostać zmienione w
          szczególności w taki sposób, aby blokować automatyczną obsługę plików
          cookies w ustawieniach przeglądarki internetowej bądź informować o ich
          każdorazowym zamieszczeniu w urządzeniu Użytkownika Serwisu.
          Szczegółowe informacje o możliwości i sposobach obsługi plików cookies
          dostępne są w ustawieniach oprogramowania (przeglądarki internetowej).
        </p>
        <span>
          Treść Polityki cookies na tej stronie powstała dzięki uprzejmości IAB
          Polska, które udostępniło jej wzór (© IAB Polska) na stronie
          www.wszystkoociasteczkach.pl.
        </span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  padding-top: 13vh;
  margin: 0 auto;
  h4 {
    text-decoration: uppercase;
    font-size: 2rem;
    color: var(--secondaryColor2);
    text-align: center;
    margin: 10vh auto 5vh;
  }
  .title {
    padding-top: 10vh;
    padding-bottom: 10vh;
    width: 100vw;
    background: #eee;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #444;
    h2 {
      color: var(--secondaryColor);
      letter-spacing: 10px;
      text-align: center;
      font-size: 2.8rem;
    }
  }
  .content {
    width: 80vw;
    margin: 15vh auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    font-family: var(--textFont);
    h3 {
      margin-bottom: 5vh;
    }
    p {
      margin: 1vh auto 1vh 0;
      letter-spacing: 1.3;
    }
  }
`;

export default RodoPage;

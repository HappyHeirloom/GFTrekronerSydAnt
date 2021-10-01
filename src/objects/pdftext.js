import {pdfText} from '../components/objectText/pdfText';

var number = 0;
var oldNum = 0;
var spareNum = 0;

var text_dk = pdfText.pdfText_DK;
var text_en = pdfText.pdfText_EN;


function resetNumber(){
  oldNum = number;
  number = spareNum;
  spareNum = oldNum
}

function raiseNumber(){
  number++;
}
function setNumber(){
  number = oldNum;
}


export var pdftext = {
  pdfstext: [
    {
      name: "Parking",
      header_DK: text_dk[number].header,
      header_EN: text_en[number].header,
      Text_DK: (
        <div>
            {text_dk[number].text}
            <br/>
            {raiseNumber()}
            {text_dk[number].text}
            <br/>
            {raiseNumber()}
            {text_dk[number].text}
            <br/>
            {raiseNumber()}
            <h3>{text_dk[number].header}</h3>
            {text_dk[number].text}
            <br/>
            {raiseNumber()}
            <h3>{text_dk[number].header}</h3>
            {text_dk[number].text}
            {resetNumber()}
        </div>
      ),
      Text_EN: (
        <div>
            {text_en[number].text}
            <br/>
            {raiseNumber()}
            {text_en[number].text}
            <br/>
            {raiseNumber()}
            {text_en[number].text}
            <br/>
            {raiseNumber()}
            <h3>{text_en[number].header}</h3>
            {text_en[number].text}
            <br/>
            {raiseNumber()}
            <h3>{text_en[number].header}</h3>
            {text_en[number].text}
            {resetNumber()}
        </div>
      ),
      setNumber: setNumber(),
    },
    {
      name: "Rules",
      header_DK: text_dk[number].header,
      header_EN: text_en[number].header,
      Text_DK: (
        <div>
            {text_dk[number].text}
            <br/>
            {raiseNumber()}
            {text_dk[number].text}
            <br/>
            {raiseNumber()}
            {text_dk[number].text}
            <br/>
            {raiseNumber()}
            {text_dk[number].text}
            {resetNumber()}
        </div>
      ),
      Text_EN: (
        <div>
            {text_en[number].text}
            <br/>
            {raiseNumber()}
            {text_en[number].text}
            <br/>
            {raiseNumber()}
            {text_en[number].text}
            <br/>
            {raiseNumber()}
            {text_en[number].text}
            {resetNumber()}
        </div>
      ),
      setNumber: setNumber(),
    },
    {
      name: "Plejebeskrivelse",
      header:
        "Plejebeskrivelse for fællesområdet for Trekroner syd samt stationsbygningen",
      Text: (
        <p id="AreaCaretakingText">
          Følgende er en vejledning drift af grønne områder på Fællesområdet for
          Trekroner Syd. I bilaget kan der ses en beskrivelse af hvert
          elementer, der opstår i området, hvor det er en vejledning til hvordan
          området skal vedligeholdes. Elementerne i vedledningen er opdelt over
          hele Fællesområdet for Trekroner Syd samt for området omkring
          Stationsbygningen. Trekroner syd består af 6 boligblokke med
          tilhørende grønt fællesareal, hvor imellem boligblokkene er der grønne
          arealer med blandt andet overdrev og skovplantning. Derudover kan der
          ses på området de erhvervsbygninger med tilhørende torve, der befinder
          sig i området. For samtlige parkeringspladser på området, er det
          anvendt som skovparkering. Hele Fællesområdet for Trekroner Syd har et
          stærkt naturpræg og sigter mod en drift, der fremmer nøjsomme arter og
          den naturbaserede udvikling. Brugsplæner findes i haver, parker og
          boligområder, og kan anvendes til ophold, leg og boldspil. Brugsplæner
          har typisk stor slidstyrke og brugsværdi.
        </p>
      ),
    },
    {
      name: "Resume",
      header:
        "Referat af ordinær generalforsamling i Grundejerforening Trekroner syd",
      Text: (
        <p id="ResumeText">
          Ordinær generalforsamling bliver afholdt en gang om året, hvor alle
          selskabets aktionærer er forpligtet til at deltage, og vil have
          stemmeret ved de beslutninger der bliver vedtaget. Det gør at
          medlemmerne har ret til at stille spørgsmål til ledelsen. Bestyrelsen
          har ret til at afvise forslaget til generalforsamling, hvor der kun
          kan stilles ændringsforslag til det bestemte emne, der skal stemmes
          om. Referat til en generalforsamling er de væsentlige punkter, som der
          bliver drøftet mellem medlemmerne. På forhånd skal bestyrelsen i G/F
          Trekroner syd udarbejde en dagsorden til medlemmerne. Disse kriterier
          blev der drøftet til mødet: Der var følgende dagsorden: 1. Valg af
          dirigent og referent 2. Bestyrelsens beretning 3. Aflæggelse af
          årsrapport underskrevet af revisor og bestyrelsen til godkendelse 4.
          Forelæggelse af drifts-/likviditetsbudget til godkendelse samt
          beslutning om størrelsen af aconto bidrag og eller indskud for det
          kommende år 5. Forslag fra bestyrelsen 6. Forslag fra medlemmer 7.
          Valg af bestyrelsesmedlemmer samt eventuelle suppleanter 8. Valg af
          administrator 9.Valg af revisor 10. Eventuelt ting som er oppe og
          blive drøftet
        </p>
      ),
    },
    {
      name: "Vedtægter",
      header: "Vedtægter",
      Text: (
        <p id="AOAText">
          Kommunikation: Såfremt medlemmerne er tilmeldt en elektronisk
          postkasse ”e-boks”, hvor de har oplyst sin e-mail til bestyrelsen
          eller selv kommunikerer med bestyrelsen via e-mail, foregår al
          korrespondance mellem medlemmer og bestyrelsen foregår per e-mail samt
          ved filer vedhæftet eller tilknyttet e-mail i form af link til
          hjemmesiden eller andres hjemmesider. Korrespondance skal forstås ved
          ” indkaldelser til generalforsamlinger med bilag i henhold til
          vedtægterne (årsregnskaber, budgetter, forslag, m.v.), opkrævninger,
          påkrav af enhver art (herunder påkrav om betaling af restancer til
          foreningen og inkassopåkrav). Foreningens område og medlemmer: Er
          hjælp af Roskilde kommunes lokalplan er grundejerforenings område
          fastlagt ” lokalplan nr. 422”. medlemmerne i G/F Trekroner syd knyttet
          til lokalplan nr. 422 § 12, stk. 1 og lokalplan nr. 544 § 10 de til
          enhver tid værende ejere af ejendomme, som befinder sig i G/F
          Trekroner syd området. Medlemmerne er forpligtet til enhver tid at
          være tilknyttet til G/F Trekroner og respektere grundejerforeningens
          vedtægter. G/F Trekroner syd formål og opgaver: hele formålet er at
          G/F Trekroner syd er at varetage medlemmernes fælles interesser i
          forbindelse til de fællesarealer der hører under grundejerforeningens
          område. Grundejerforeningen er forpligtet til at drive, renholde,
          vedligeholde og forny alverden udenoms arealer uden for de enkelte
          sokkeludstykkede bebyggelser, kun hvis placering fremgår af det med
          grønt markerede området, som der kan ses i pdf-filen vedtægter bilag
          2. Grundejerforeningens overtagelse af interne veje, stier,
          parkeringsanlæg, grønne arealer mv. Grundejerforening har ansvaret for
          de med grønt markerede arealer og anlæg på bilag 2 i pdf-filen
          vedtægter. Overdragelse af arealer og anlæg ønskes at finde sted 14
          dage efter ibrugtagning af byggeri i de enkelte etaper. Alt asfalt i
          området overdrages med ny udlagt slidlag, hvor samlet grusstier gives
          der ny udlagt grus belægning. Områdets parkeringsanlæg gives der ny
          anlagte overflader og med beplantning i forhold til bestemmelserne i
          gældende lokalplaner. Medlemmernes forhold til grundejerforeningen:
          Hvert år fastholder G/F Trekroner den ordinær generalforsamling, hvor
          der samlet skal opkræves for det kommende regnskabsår, ved hjælp af
          for udarbejdning af det godkendte budget. Bidrag betales halvårligt
          forud efter påkrav. Generalforsamling: Grundejerforeningens højeste
          myndighed er generalforsamling, hvor den ordinær generalforsamling
          bliver afholdt hvert år inden udgangen af maj måned i Roskilde
          kommune. På den nuværende ordinærgeneralforsamling følgende punkter
          behandles. 1. Valg af dirigent 2. Bestyrelsens beretning 3. Aflæggelse
          af årsrapport underskrevet af revisor og bestyrelsen til godkendelse
          4. Forelæggelse af drifts-/likviditetsbudget til godkendelse samt
          beslutning om størrelsen af aconto bidrag og eller indskud for det
          kommende år 5. Forslag fra bestyrelsen 6. Forslag fra medlemmer 7.
          Valg af bestyrelsesmedlemmer samt eventuelle suppleanter 8. Valg af
          administrator 9.Valg af revisor 10. Eventuelt Stemmeret og
          vedtægtsændring Ved beslutninger og valg af almindelige sager vedtæges
          ved simpelt flertal. Alt afstemning kan ske ved håndsoprækning, men
          der skal indskrives en skriftlig rapport, hvis bestyrelsen eller
          mindst to medlemmer af forening kræver det. For at vedtægtsændring
          skal ske er det vigtigt at mindst halvdelen af medlemmerne afgiver
          stemme, og at beslutningen tages med mindst 2/3 af de afgivende
          stemmer. Ved ændring af G/F Trekroner syd vedtægter, der pålægger
          ejerne væsentlige og nye økonomiske forpligtelser, kræver
          enstemmighed. Protokol: Fra generalformsamling de beslutninger og de
          behandlede sager indføres i forenings forhandlingsprotokol, hvor der
          underskrives af dirigenten og de tilstedeværende bestyrelsesmedlemmer.
          Regnskab og revision samt administration: Der bliver udpeget et medlem
          fra bestyrelsen til kasserer. Kassererens arbejdsområdet, er personen
          får foreningens indtægter, og udbetaler alle af formanden godkendte
          udgifter. Godkendelsen skal foregå skriftligt. Kassereren skal blandt
          andet underskriv alle kvitteringer, hvor kassebeholdning skal fremstå
          i en bank eller på giro. Det er vigtigt at kontoen er klausuleret
          således der kun kan hæves på kontoen i forhold til tegningsregler.
        </p>
      ),
    },
    {
      name: "Budget",
      header: "Oversigt over budget",
      Text: (
        <p id="BudgetText">
          Budget er en liste over de indtægter og udgifter, som skal udarbejdes
          hver måned. I bilagene kan der ses en udarbejdes gennem de seneste 5
          år. Årstallene fra 2017-2021. Grund til man udarbejder et budget
          skyldes, at man kan danne sig et overblik over, hvad pengene bliver
          brugt til. Det bliver også nemmere at navigerer rundt i, hvis man er
          usikker, hvad pengene bliver brugt til. Det kan hurtigt ses, hvis der
          er disharmoni mellem budget og den faktiske tal. Det som der indgår i
          et resultatbudget, er indtægter og udgifter, hvor man har fokus på
          omsætning fordelt på ydelse, og kigger på de variable omkostninger og
          faste omkostninger.
        </p>
      ),
    },
    {
      name: "Udbudsmateriale",
      header: "Udbudsmateriale",
      Text: (
        <p id="TenderText">
          Bemærk venligst følgende: Hovedstien fra Torvet til broen over
          Trekroner Centervej er udenfor entreprisen, den drøftes af Roskilde
          Kommune. Kloakker, brønde mv. tilses og drøftes af et eksternt firma.
          Løse søm og skruer kan registreres af leverandøren, men udføres af
          driftsherrens personale. Affald, oprydning og rengøring hører under
          entreprisen. I denne Særlige Arbejdsbeskrivelse (SAB) beskrives
          omfanget af arbejdet. Leverancen omfatter følgende opgaver i
          Trekroner: - Pleje og vedligeholdelse af grønne områder, bestående af
          græsarealer, stauder, busketter, krat, hække, hegn, lunde, skove,
          belægninger og inventar. - Ukrudtsbekæmpelse på faste og løse
          belægninger samt faldunderlag. - Renhold for affald bestående af
          farligt affald, mindre affald, middel affald, større affald og
          planteaffald. - Vinter tjeneste på stier, veje og pladser. -
          Eventuelle ekstraarbejder. Parkeringspladserne er iht. lokalplanen
          udlagt som skovparkering. Friarealerne består af bolignære områder og
          fælles friarealer for hele bebyggelsen, og de har meget forskellig
          karakter. Leverancen er opdelt i del leverancer: - Trekroner grøn
          drift - Renholdelse - Vintertjenesten. Leverancen er gældende for en
          periode på 2 år fra ikrafttræden af kontrakten 1. april 2021.
          Leverancen kan på uændrede vilkår forlænges med et år ad gangen i op
          til 3 år
        </p>
      ),
    },
  ],
};

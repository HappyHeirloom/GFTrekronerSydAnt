//#region Imports
import React from "react"
import { withRouter, Link } from "react-router-dom";
import changeLanguage from "../components/lang";
import lang_en from "../components/lang";

//#endregion

function Gf() {
  //#region HTML code
  return (
    <div className="">
      <h1 className="text-center p-3">Grundejerforeningen</h1>
      <div className="">
        <div className="row p-2">
          <div className="col-md-6">
            <h5>G/F Trekroner syd befinder sig i disse områder</h5>
            <p>
              Trekroner Allé, Trekronerparken, Trekroner Centervej og Trekroner Stationsvej. 
              Området består af Trekroner Center, Ahornlunden, Akacielunden, Poppellunden og Pærelunden. 
              Derudover består området af et mindre areal, som befinder sig i et område mellem Trekroner Centervej og indgangen til Trekroner Station.
            </p>
          </div>
          <div className="col-md-6">
            <h5>Praktisk information om G/F Trekroner syd: Funktion</h5>
            <p>
              G/F Trekroner syd er med til at give en forståelse og yde en god service inden for administration, men vi beskæftiger os med drift af fællesanlæg og fællesarealer i Trekroner syd. 
              G/F er hermed til hjælp om at gøre forbrugerens hver dag nemmere, ved at vedligeholde området. 
              Trekroner syd er i samarbejde med Roskilde kommune, at få den optimale dialog med hensyn til vedligeholdelse af fællesveje, kloakker og lign.  
    
            </p>
          </div>
        </div>
        <div className="row p-2">
          <div className="col-md-6">
          <h5>Praktisk information om G/F Trekroner syd: Ansvar</h5>
            <p>
              G/F Trekroner syd er placeret i de områder ovenover, og er forpligtet til at drive og vedligeholde området i de grønne arealer, stier, veje, og parkeringsplader. 
              Arealerne overdrages til grundejerforeningen efterhånden, som de bliver anlagt i forbindelse med de enkelte byggerier i området. 
              Det er en vigtig information at vide, at G/F Trekroner syd er derimod ikke forpligtet til at forholde sig til byggepladser eller endnu ubebyggede arealer. 
              Der er en enkelt undtagelse mere, fordi en sti fra Trekroner Centervej ved Trekroner Station, over Centertorvet, langs Akacielunden til broen over Trekroner Allé er en kommunal sti, der ejes og drives af Roskilde Kommune.
            </p>
          </div>
          <div className="col-md-6">
          <h5>Praktisk information om G/F Trekroner syd: Medlemmerne</h5>
            <p>
              Medlemmerne i grundejerforeningen er en samling af forskellige ejerforeninger i området Trekroner Syd. Disse ejerforeninger er en masse lejligheder som er ejet af forskellige beboere.
              Disse beboere skal først og fremmest gå til deres ejerforeninger hvis der kommer nogle problemer med deres ejerforening. 
              Hvis dette problem er mere generelt i området så skal ejerforeningen gå til grundejerforeningen som ville tage hånd over dette problem.
              For de nye indflyttet beboere i området er du forpligtet til at være medlem af grundejerforening G/F Trekroner syd, det kan ses på vores vedtægter, referater fra generalforsamling, hvor man har muligheden for at læse nærmere på hjemmesiden.   
            </p>
         </div>
        </div>
        </div>
        <div className="text-center">
          <strong className="text-center"> På knappen kan du se alle ejerforeningerne</strong>
      <button variant="outlined" className="m-3"> <Link to ="/ejerforeningerne"> Klik her </Link></button>
        </div>

        <button onClick={() => console.log(changeLanguage(false))}>change lan</button>
    </div>

  );
  //#endregion
}

export default withRouter(Gf);

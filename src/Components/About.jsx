import React from "react";
import Navbar from "./Navbar";
import Map from "../assets/map.jpeg";
import "../App.css";

function About() {
  return (
    <>
      <Navbar />
      <div className="about">
        <h1>About Aligarh</h1>
        <p>
          Aligarh is a District of Uttar Pradesh, India. The city is located
          about 90 miles (140 km) southeast of New Delhi. The administrative
          headquarters of Aligarh District is Aligarh(Koil). It is also
          commissionary HQ for all four Districts Aligarh itself, Hathras,
          Kasganj and Etah. It is mostly known as a university town where the
          famous Aligarh Muslim University is located. It is also well known
          District intenationally because of its lock industries.
        </p>
        <img src={Map} alt="map" />
        <h2>History</h2>
        <p>
          Aligarh was known by the earlier name of Kol or Koil before the 18th
          century. The name Kol covered not only the city but the entire
          district, though its geographical limits kept changing from time to
          time. The origin of the name is obscure. In some ancient texts, Kol
          has been referred to in the sense of a tribe or caste, name of a place
          or mountain and name of a sage or demon. From the study of the
          place-names of the district, it appears that the district was once
          fairly well covered by forest, thickets and groves. The early history
          of the district, through the 12th century AD is obscure. According to
          Edwin T. Atkinson, the name Kol was given to the city by Balarama, who
          slew here the great Asura (demon) Kol and with the assistance of the
          Ahirs subdued this part of the Doab. In another account, Atkinson
          points out a “legend” that Kol was founded by the Dor tribe of Rajputs
          in 372 AD. This could be further confirmed by an old fort, the Dor
          fortress, now in ruins, which lies at the city’s centre. Some time
          before the Muslim invasion, Kol was held by the Dor Rajputs and in the
          time of Mahmud of Ghazni the chief of the Dors was Hardatta of Baran.
          There is reason to believe that Kol was once the seat of a Buddhist
          community as statues of Buddha and other Buddhist remains have been
          found in excavations made in the eminence on which the citadel of Koil
          stood. It also had Hindu remains indicating that in all probability
          the citadel contained in succession a Buddhist and a Hindu temple. In
          1194 AD, Qutb-ud-din Aybak marched from Delhi to Koil which was “one
          of the most celebrated fortresses of Hind”. Qutb-ud-din Aybak
          appointed Hisam-ud-din Ulbak as the first Muslim governor of Koil.
          Koil is also mentioned in Ibn Battuta’s Rihla, when Ibn Battuta along
          with 15 ambassadors representing Ukhaantu Khan, the Mongol Emperor of
          the Yuan dynasty in China, traveled to Koil city en route to the coast
          at Cambay (in Gujarat) in 1341. According to Ibn Battuta, it would
          appear that the district was then in a very disturbed state since the
          escort of the Emperor’s embassy had to assist in relieving Jalali from
          an attacking body of Hindus and lost one of their officers in the
          fight. Ibn Batuta calls Koil “a fine town surrounded by mango groves”.
          From these same groves the environs of Koil would appear to have
          acquired the name of Sabzabad or “the green country”. In the reign of
          Akbar, Koil was made a Sirkar and included the dasturs of Marahra, Kol
          ba Haveli, Thana Farida and Akbarabad Both Akbarand Jahangir visited
          Kol on hunting expeditions. Jahangir clearly mentions the forest of
          Kol, where he killed wolves. During the time of Ibrahim Lodhi,
          Muhammad, son of Umar was the governor of Kol, built a fort at Kol and
          named the city after his own name as Muhammadgarh in 1524-25; and
          Sabit Khan who was the governor of this region during the time of
          Farrukh Siyar and Muhammad Shah, rebuilt the old Lodi fort and named
          the town after his own name Sabitgarh. The ruler of Koil was Bargujar
          King Rao Bahadur Singh whose ancestors ruled it from AD 1184 after the
          marriage of Raja of Koil Ajit Singh’s daughter to Raja Pratp Singh
          Bargujar. In early 1753, the Bargujar Chief rose against the
          destruction of Hindu temples. The Jat ruler Surajmal in 1753, with
          patronage from Jai Singh of Jaipur and the Muslim army occupied the
          fort of Koil, the Bargujar Raja Bahadur Singh continued the battle
          from another fort under them and died fighting in what is known as the
          “Battle of Ghasera”. It was re-named Ramgarh and finally, when a Shia
          commander, Najaf Khan, captured Kol, he gave it its present name of
          Aligarh. Aligarh Fort (also called Aligarh Qila), as it stands today,
          was built by French engineers under the control of French officers
          Benoît de Boigne and Perron. Establishment of Aligarh Muslim
          University (1875):- In 1875, Sir Syed Ahmed Khan founded the
          Muhammadan Anglo Oriental College in Aligarh and patterned the college
          after Oxford and Cambridge universities that he had visited on a trip
          to England. This later became Aligarh Muslim University in 1920.
        </p>
      </div>
    </>
  );
}

export default About;

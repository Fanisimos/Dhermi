'use client';

import { useState } from 'react';

type Language = 'al' | 'en' | 'el' | 'it' | 'es' | 'de' | 'fr';

interface MapLink {
  name: string;
  url: string;
}

const content = {
  al: {
    title: 'Dhermi (Drymades) – Riviera Shqiptare',
    intro: 'Dhermi (Drymades) është një nga destinacionet më mahnitëse të Rivierës Shqiptare, i njohur për ujërat kristal të turbullt, plazhet e mëdha dhe kombinimin unik të maleve dhe detit.',
    sections: {
      introduction: {
        heading: 'Përshëndetje në Dhermi',
        content: 'Fshati nuk ishte gjithmonë në vendndodhjen e tij të tanishme. Në antikë, ai ishte ndërtuar afër detit, në zonën "Megali Hora". Për shkak të sulmeve pirate dhe sëmundjeve, banorët u zhvendosen në kodra pas shekullit të 13-të, duke krijuar fshatit të sotëm.\n\nSot, rrugicëzat me guri, dhjetëra kisha dhe pamja panoramike e Jonianit krijojnë një përvojë unike të mikpritjes autentike.',
      },
      attractions: {
        heading: '🏛️ Atraksionet & Përvoja',
        items: [
          { 
            title: 'Manastiri i Shën Mërisë',
            desc: 'Një nga monumentet më të vjetra të zonës (shekulli 13-14). Ikonat e vitit 1781 janë mahnitëse, ndërkohë që legjenda e një thesari të fshehur nga koha e sundimit osman shton një ndjenjë misteri.',
            mapLink: { name: 'Manastiri i Shën Mërisë', url: 'https://www.google.com/maps?q=Manastiri+i+Shën+Mërisë+Dhermi' }
          },
          { 
            title: 'Manastiri i Shenjtë i Drymadeve (Stavridi)',
            desc: 'Manastiri i Stavridi është një nga vendet më të veçanta dhe historike fetare të rajonit, duke kombinuar bukurinë natyrore, traditën dhe shpirtërinë. Ndodhet në një vend të qetë brenda natyrës, duke ofruar paqe dhe pamje unike.\n\nSipas traditës lokale, rreth 400 vjet më parë, një bariator nga Drymades vuri re se një dre zhdukej çdo ditë dhe nuk pinte ujë. Pas një shfaqjeje, vendosi ta ndjekë dhe zbuloi një burim të vogël, nga i cili dreri pinte ujë, si dhe një ikonë të Virgjëreshës (Zoe Hora).',
            mapLink: { name: 'Stavridi Monastery', url: 'https://www.google.com/maps?q=Stavridi+Monastery+Dhermi' }
          },
          { 
            title: 'The Mill\'s Trail – Dhermi',
            desc: 'Rrugicë pitoreske përgjatë lumit, ideale për ecje në këmbë nëpër bimësi të pasur. Ofron bukuri natyrore, hije dhe një përvojë të qetë në natyrën e lirë.',
            mapLink: { name: 'The Mill\'s Trail', url: 'https://www.google.com/maps?q=The+Mill\'s+Trail+Dhermi' }
          },
          { 
            title: 'Old Village of Dhermi',
            desc: 'Vendbanim tradicional me shtëpi kambeje, rrugicëza të ngushta dhe arkitekturë autentike.',
            mapLink: { name: 'Dhermi Old Village', url: 'https://www.google.com/maps?q=Dhermi+Old+Village' }
          },
          { 
            title: 'Llogara National Park',
            desc: 'Park kombëtar mahnitës në distancë të vogël nga Dhermi, i njohur për malet, ajrin e pastër dhe pamjen mahnitëse drejt Jonianit. Rajoni është ideal për shëtitje në natyrë, fotografi dhe ndalesë për të ngrënë. Ka taverna dhe restorante tradicionale, të famshme për ushqimin e tyre të shkëlqyer — veçanërisht për dashnuesit e mishit. Përveç kësaj, Llogara është e famshme për paragliding.',
            mapLink: { name: 'Llogara National Park', url: 'https://www.google.com/maps?q=Llogara+National+Park' }
          },
        ],
      },
      food: {
        heading: '🍽️ Ushqimi & Ngrënia',
        items: [
          { 
            title: 'Alevra Restaurant',
            desc: 'Kuzhina tradicionale me produkte lokale dhe shije autentike.',
            mapLink: { name: 'Alevra Restaurant', url: 'https://www.google.com/maps?q=Alevra+Restaurant+Dhermi' }
          },
          { 
            title: 'Luciano Restaurant',
            desc: 'Kuzhina mesdhetare dhe italisht në një mjedis elegante.',
            mapLink: { name: 'Luciano Restaurant', url: 'https://www.google.com/maps?q=Luciano+Restaurant+Dhermi' }
          },
          { 
            title: 'Angelos Souvlaki & Grill',
            desc: 'Zgjedhje popullore për ushqim të shpejt dhe të shijshëm me ndikim grek.',
            mapLink: { name: 'Angelos Souvlaki', url: 'https://www.google.com/maps?q=Angelos+Souvlaki+Dhermi' }
          },
          { 
            title: 'Panorama Restaurant',
            desc: 'Dallohet për pamjen unike dhe diellëvenimet mahnitëse.',
            mapLink: { name: 'Panorama Restaurant', url: 'https://www.google.com/maps?q=Panorama+Restaurant+Dhermi' }
          },
        ],
      },
      beaches: {
        heading: '🌊 Plazhet',
        items: [
          { 
            title: 'Gjipe Beach',
            desc: 'Plazh mahnitës me gjerë dhe ujëra kristal.',
            mapLink: { name: 'Gjipe Beach', url: 'https://www.google.com/maps?q=Gjipe+Beach' }
          },
          { 
            title: 'Saint Andreas Beach',
            desc: 'E qetë dhe e pastër, ideale për relaksim.',
            mapLink: { name: 'Saint Andreas Beach', url: 'https://www.google.com/maps?q=Saint+Andreas+Beach+Albania' }
          },
          { 
            title: 'Gramma Bay',
            desc: 'Limani historik me ujëra turquese dhe bukuri natyrore unike.',
            mapLink: { name: 'Gramma Bay', url: 'https://www.google.com/maps?q=Gramma+Bay+Albania' }
          },
          { 
            title: 'Jale Beach',
            desc: 'Plazh i gjallë me beach bars dhe atmosferë intensive verore.',
            mapLink: { name: 'Jale Beach', url: 'https://www.google.com/maps?q=Jale+Beach' }
          },
        ],
      },
      zoeHora: {
        heading: '🌿 Zoe Hora',
        items: [
          {
            title: 'Zoe Hora',
            desc: 'Zoe Hora është një vendbanim i vogël tradicional mbi Dhermin, me shtëpi kambeje dhe pamje mahnitëse të Jonianit. Ofron një atmosferë të qetë dhe autentike, ideale për ata që kërkojnë paqe.',
            mapLink: { name: 'Zoe Hora', url: 'https://www.google.com/maps?q=Zoe+Hora+Dhermi' }
          }
        ],
      },
    },
    languages: {
      al: 'Shqip',
      en: 'English',
      el: 'Ελληνικά',
      it: 'Italiano',
      es: 'Español',
      de: 'Deutsch',
      fr: 'Français',
    },
  },
  en: {
    title: 'Dhermi (Drymades) – Albanian Riviera',
    intro: 'Dhermi (Drymades) is one of the most stunning destinations of the Albanian Riviera, renowned for its crystal-clear turquoise waters, large beaches, and the unique combination of mountains and sea.',
    sections: {
      introduction: {
        heading: 'Welcome to Dhermi',
        content: 'The village was not always at its present location. In antiquity, it was built by the sea, in the area of "Megali Hora." Due to pirate raids and diseases, residents migrated to the hillsides after the 13th century, creating the village as it exists today.\n\nToday, cobblestone alleyways, dozens of churches, and panoramic views of the Ionian Sea create a unique experience of authentic hospitality.',
      },
      attractions: {
        heading: '🏛️ Attractions & Experiences',
        items: [
          { 
            title: 'Monastery of the Nativity of the Virgin Mary (Manastir i Shën Mërisë)',
            desc: 'One of the region\'s oldest monuments (13th–14th centuries). The frescoes from 1781 are breathtaking, while the legend of hidden treasure from the Ottoman period adds an air of mystery.',
            mapLink: { name: 'Manastiri i Shën Mërisë', url: 'https://www.google.com/maps?q=Manastiri+i+Shën+Mërisë+Dhermi' }
          },
          { 
            title: 'Holy Monastery of Drymades (Stavridi)',
            desc: 'The Stavridi Monastery is one of the most distinctive and historically significant religious sites in the region, blending natural beauty, tradition, and spirituality. Nestled in a tranquil setting within nature, it offers peace and remarkable views.\n\nAccording to local tradition, about 400 years ago, a shepherd from Drymades noticed a wild goat disappearing daily without drinking water. Following a divine vision, he decided to follow the animal and discovered a small spring where the goat drank, along with an image of the Virgin Mary (Zoe Hora—Life-Giving Spring).',
            mapLink: { name: 'Stavridi Monastery', url: 'https://www.google.com/maps?q=Stavridi+Monastery+Dhermi' }
          },
          { 
            title: 'The Mill\'s Trail – Dhermi',
            desc: 'A picturesque hiking trail along a river, perfect for walking through lush vegetation. Offering natural beauty, shade, and a peaceful experience in nature.',
            mapLink: { name: 'The Mill\'s Trail', url: 'https://www.google.com/maps?q=The+Mill\'s+Trail+Dhermi' }
          },
          { 
            title: 'Old Village of Dhermi',
            desc: 'A traditional settlement with stone houses, narrow alleyways, and authentic architecture.',
            mapLink: { name: 'Dhermi Old Village', url: 'https://www.google.com/maps?q=Dhermi+Old+Village' }
          },
          { 
            title: 'Llogara National Park ⭐ Must Visit',
            desc: 'A stunning national park a short distance from Dhermi, known for its mountains, crisp mountain air, and breathtaking views of the Ionian Sea. The area is ideal for nature walks, photography, and stopping for a meal. It features traditional tavernas and restaurants renowned for their excellent food—particularly for meat enthusiasts. Additionally, Llogara is famous for paragliding, offering a unique experience with sweeping views of the sea from above.',
            mapLink: { name: 'Llogara National Park', url: 'https://www.google.com/maps?q=Llogara+National+Park' }
          },
        ],
      },
      food: {
        heading: '🍽️ Food & Dining',
        items: [
          { 
            title: 'Alevra Restaurant',
            desc: 'Traditional cuisine featuring local products and authentic flavors.',
            mapLink: { name: 'Alevra Restaurant', url: 'https://www.google.com/maps?q=Alevra+Restaurant+Dhermi' }
          },
          { 
            title: 'Luciano Restaurant',
            desc: 'Mediterranean and Italian cuisine in an elegant setting.',
            mapLink: { name: 'Luciano Restaurant', url: 'https://www.google.com/maps?q=Luciano+Restaurant+Dhermi' }
          },
          { 
            title: 'Angelos Souvlaki & Grill',
            desc: 'A popular choice for quick and delicious fare with Greek influences.',
            mapLink: { name: 'Angelos Souvlaki', url: 'https://www.google.com/maps?q=Angelos+Souvlaki+Dhermi' }
          },
          { 
            title: 'Panorama Restaurant',
            desc: 'Stands out for its unique views and spectacular sunsets.',
            mapLink: { name: 'Panorama Restaurant', url: 'https://www.google.com/maps?q=Panorama+Restaurant+Dhermi' }
          },
        ],
      },
      beaches: {
        heading: '🌊 Beaches',
        items: [
          { 
            title: 'Gjipe Beach',
            desc: 'A stunning beach with dramatic canyon walls and crystal-clear waters.',
            mapLink: { name: 'Gjipe Beach', url: 'https://www.google.com/maps?q=Gjipe+Beach' }
          },
          { 
            title: 'Saint Andreas Beach',
            desc: 'Peaceful and pristine, ideal for relaxation.',
            mapLink: { name: 'Saint Andreas Beach', url: 'https://www.google.com/maps?q=Saint+Andreas+Beach+Albania' }
          },
          { 
            title: 'Gramma Bay',
            desc: 'A historic cove with turquoise waters and unique natural beauty.',
            mapLink: { name: 'Gramma Bay', url: 'https://www.google.com/maps?q=Gramma+Bay+Albania' }
          },
          { 
            title: 'Jale Beach',
            desc: 'A lively beach with beach bars and vibrant summer atmosphere.',
            mapLink: { name: 'Jale Beach', url: 'https://www.google.com/maps?q=Jale+Beach' }
          },
        ],
      },
      zoeHora: {
        heading: '🌿 Zoe Hora',
        items: [
          {
            title: 'Zoe Hora',
            desc: 'Zoe Hora is a small traditional settlement perched above Dhermi, featuring stone houses and enchanting views of the Ionian Sea. It offers a serene and authentic atmosphere, perfect for those seeking tranquility.',
            mapLink: { name: 'Zoe Hora', url: 'https://www.google.com/maps?q=Zoe+Hora+Dhermi' }
          }
        ],
      },
    },
    languages: {
      al: 'Shqip',
      en: 'English',
      el: 'Ελληνικά',
      it: 'Italiano',
      es: 'Español',
      de: 'Deutsch',
      fr: 'Français',
    },
  },
  el: {
    title: 'Dhermi (Drymades) – Αλβανική Ριβιέρα',
    intro: 'Το Dhermi (Drymades) είναι ένας από τους πιο εντυπωσιακούς προορισμούς της Αλβανικής Ριβιέρας, γνωστός για τα κρυστάλλινα τιρκουάζ νερά, τις μεγάλες παραλίες και το μοναδικό συνδυασμό βουνού και θάλασσας.',
    sections: {
      introduction: {
        heading: 'Καλώς ήρθατε στο Dhermi',
        content: 'Το χωριό δεν βρισκόταν πάντα στη σημερινή του τοποθεσία. Στην αρχαιότητα ήταν χτισμένο κοντά στη θάλασσα, στην περιοχή «Μεγάλη Χώρα». Λόγω πειρατικών επιδρομών και ασθενειών, οι κάτοικοι μετακινήθηκαν στους λόφους μετά τον 13ο αιώνα, δημιουργώντας το σημερινό χωριό.\n\nΣήμερα, τα λιθόστρωτα σοκάκια, οι δεκάδες εκκλησίες και η πανοραμική θέα στο Ιόνιο δημιουργούν μια μοναδική εμπειρία αυθεντικής φιλοξενίας.',
      },
      attractions: {
        heading: '🏛️ Αξιοθέατα & Εμπειρίες',
        items: [
          { 
            title: 'Μονή της Ναταλίας της Θεοτόκου (Manastiri i Shën Mërisë)',
            desc: 'Ένα από τα παλαιότερα μνημεία της περιοχής (13ος–14ος αιώνας). Οι αγιογραφίες του 1781 είναι εντυπωσιακές, ενώ η θρυλική ιστορία ενός κρυμμένου θησαυρού από τα χρόνια της Τουρκοκρατίας προσθέτει μια αίσθηση μυστηρίου.',
            mapLink: { name: 'Manastiri i Shën Mërisë', url: 'https://www.google.com/maps?q=Manastiri+i+Shën+Mërisë+Dhermi' }
          },
          { 
            title: 'Ιερά Μονή Δρυμάδων (Σταυρίδι)',
            desc: 'Το μοναστήρι του Σταυριδίου αποτελεί ένα από τα πιο ιδιαίτερα και ιστορικά θρησκευτικά σημεία της περιοχής, συνδυάζοντας φυσική ομορφιά, παράδοση και πνευματικότητα. Βρίσκεται σε ήσυχη τοποθεσία μέσα στη φύση, προσφέροντας γαλήνη και μοναδική θέα.\n\nΣύμφωνα με την τοπική παράδοση, πριν από περίπου 400 χρόνια, ένας βοσκός από τους Δρυμάδες παρατήρησε ότι ένας τράγος εξαφανιζόταν καθημερινά και δεν έπινε νερό. Μετά από ένα όραμα, αποφάσισε να τον ακολουθήσει και ανακάλυψε μια μικρή πηγή, από την οποία ο τράγος έπινε νερό, καθώς και μια εικόνα της Παναγίας (Ζωοδόχος Πηγή).',
            mapLink: { name: 'Stavridi Monastery', url: 'https://www.google.com/maps?q=Stavridi+Monastery+Dhermi' }
          },
          { 
            title: 'The Mill\'s Trail – Dhermi',
            desc: 'Γραφικό μονοπάτι κατά μήκος ποταμού, ιδανικό για πεζοπορία μέσα σε πλούσια βλάστηση. Προσφέρει φυσική ομορφιά, σκιά και μια ήρεμη εμπειρία στη φύση.',
            mapLink: { name: 'The Mill\'s Trail', url: 'https://www.google.com/maps?q=The+Mill\'s+Trail+Dhermi' }
          },
          { 
            title: 'Παλιό Χωριό Δερμί',
            desc: 'Παραδοσιακός οικισμός με πέτρινα σπίτια, στενά σοκάκια και αυθεντική αρχιτεκτονική.',
            mapLink: { name: 'Dhermi Old Village', url: 'https://www.google.com/maps?q=Dhermi+Old+Village' }
          },
          { 
            title: 'Εθνικό Πάρκο Λογαρά ⭐ Must Visit',
            desc: 'Εντυπωσιακό εθνικό πάρκο σε μικρή απόσταση από το Dhermi, γνωστό για τα βουνά, τον καθαρό αέρα και τη μαγευτική θέα προς το Ιόνιο. Η περιοχή είναι ιδανική για βόλτες στη φύση, φωτογραφίες και στάση για φαγητό. Διαθέτει παραδοσιακές ταβέρνες και εστιατόρια, φημισμένα για το εξαιρετικό φαγητό τους — ιδιαίτερα για τους λάτρεις του κρέατος. Επιπλέον, η Λογαρά είναι διάσημη για paragliding.',
            mapLink: { name: 'Llogara National Park', url: 'https://www.google.com/maps?q=Llogara+National+Park' }
          },
        ],
      },
      food: {
        heading: '🍽️ Φαγητό & Εστίαση',
        items: [
          { 
            title: 'Alevra Restaurant',
            desc: 'Παραδοσιακή κουζίνα με τοπικά προϊόντα και αυθεντικές γεύσεις.',
            mapLink: { name: 'Alevra Restaurant', url: 'https://www.google.com/maps?q=Alevra+Restaurant+Dhermi' }
          },
          { 
            title: 'Luciano Restaurant',
            desc: 'Μεσογειακή και ιταλική κουζίνα σε κομψό περιβάλλον.',
            mapLink: { name: 'Luciano Restaurant', url: 'https://www.google.com/maps?q=Luciano+Restaurant+Dhermi' }
          },
          { 
            title: 'Angelos Souvlaki & Grill',
            desc: 'Δημοφιλής επιλογή για γρήγορο και νόστιμο φαγητό με ελληνικές επιρροές.',
            mapLink: { name: 'Angelos Souvlaki', url: 'https://www.google.com/maps?q=Angelos+Souvlaki+Dhermi' }
          },
          { 
            title: 'Panorama Restaurant',
            desc: 'Ξεχωρίζει για τη μοναδική θέα και τα εντυπωσιακά ηλιοβασιλέματα.',
            mapLink: { name: 'Panorama Restaurant', url: 'https://www.google.com/maps?q=Panorama+Restaurant+Dhermi' }
          },
        ],
      },
      beaches: {
        heading: '🌊 Παραλίες',
        items: [
          { 
            title: 'Gjipe Beach',
            desc: 'Εντυπωσιακή παραλία με φαράγγι και κρυστάλλινα νερά.',
            mapLink: { name: 'Gjipe Beach', url: 'https://www.google.com/maps?q=Gjipe+Beach' }
          },
          { 
            title: 'Saint Andreas Beach',
            desc: 'Ήσυχη και καθαρή, ιδανική για χαλάρωση.',
            mapLink: { name: 'Saint Andreas Beach', url: 'https://www.google.com/maps?q=Saint+Andreas+Beach+Albania' }
          },
          { 
            title: 'Gramma Bay',
            desc: 'Ιστορικός όρμος με τιρκουάζ νερά και μοναδική φυσική ομορφιά.',
            mapLink: { name: 'Gramma Bay', url: 'https://www.google.com/maps?q=Gramma+Bay+Albania' }
          },
          { 
            title: 'Jale Beach',
            desc: 'Ζωντανή παραλία με beach bars και έντονη καλοκαιρινή ατμόσφαιρα.',
            mapLink: { name: 'Jale Beach', url: 'https://www.google.com/maps?q=Jale+Beach' }
          },
        ],
      },
      zoeHora: {
        heading: '🌿 Zoe Hora',
        items: [
          {
            title: 'Zoe Hora',
            desc: 'Το Zoe Hora είναι ένας μικρός παραδοσιακός οικισμός πάνω από το Dhermi, με πέτρινα σπίτια και μαγευτική θέα στο Ιόνιο. Προσφέρει ένα ήρεμο και αυθεντικό κλίμα, ιδανικό για όσους αναζητούν γαλήνη.',
            mapLink: { name: 'Zoe Hora', url: 'https://www.google.com/maps?q=Zoe+Hora+Dhermi' }
          }
        ],
      },
    },
    languages: {
      al: 'Shqip',
      en: 'English',
      el: 'Ελληνικά',
      it: 'Italiano',
      es: 'Español',
      de: 'Deutsch',
      fr: 'Français',
    },
  },
  it: {
    title: 'Dhermi (Drymades) – Riviera Albanese',
    intro: 'Dhermi (Drymades) è una delle destinazioni più affascinanti della Riviera Albanese, rinomata per le sue acque turchesi cristalline, le spiagge grandi e l\'affascinante combinazione di montagne e mare.',
    sections: {
      introduction: {
        heading: 'Benvenuto a Dhermi',
        content: 'Il villaggio non si trovava sempre nella sua posizione attuale. Nell\'antichità era costruito vicino al mare, nell\'area di "Megali Hora". A causa delle incursioni piratesche e delle malattie, i residenti si trasferirono sulle colline dopo il 13º secolo, creando il villaggio come esiste oggi.\n\nOggi, le viuzze acciottolate, le decine di chiese e le viste panoramiche sul Mar Ionio creano un\'esperienza unica di ospitalità autentica.',
      },
      attractions: {
        heading: '🏛️ Attrazioni & Esperienze',
        items: [
          { 
            title: 'Monastero della Natività della Vergine Maria (Manastiri i Shën Mërisë)',
            desc: 'Uno dei monumenti più antichi della regione (13º–14º secolo). Gli affreschi del 1781 sono affascinanti, mentre la leggenda di un tesoro nascosto risalente al periodo ottomano aggiunge un\'aria di mistero.',
            mapLink: { name: 'Manastiri i Shën Mërisë', url: 'https://www.google.com/maps?q=Manastiri+i+Shën+Mërisë+Dhermi' }
          },
          { 
            title: 'Monastero Santo di Drymades (Stavridi)',
            desc: 'Il monastero di Stavridi è uno dei siti religiosi più distintivi e significativi dal punto di vista storico della regione, unendo bellezza naturale, tradizione e spiritualità. Situato in un luogo tranquillo immerso nella natura, offre pace e viste straordinarie.\n\nSecondo la tradizione locale, circa 400 anni fa, un pastore di Drymades notò una capra selvatica che scompariva ogni giorno senza bere acqua. Seguendo una visione divina, decise di seguire l\'animale e scoprì una piccola sorgente dove la capra beveva, insieme a un\'immagine della Vergine Maria (Zoe Hora—Sorgente della Vita).',
            mapLink: { name: 'Stavridi Monastery', url: 'https://www.google.com/maps?q=Stavridi+Monastery+Dhermi' }
          },
          { 
            title: 'The Mill\'s Trail – Dhermi',
            desc: 'Un affascinante sentiero escursionistico lungo un fiume, perfetto per passeggiate attraverso una lussureggiante vegetazione. Offre bellezza naturale, ombra e un\'esperienza tranquilla immersa nella natura.',
            mapLink: { name: 'The Mill\'s Trail', url: 'https://www.google.com/maps?q=The+Mill\'s+Trail+Dhermi' }
          },
          { 
            title: 'Villaggio Antico di Dhermi',
            desc: 'Un insediamento tradizionale con case in pietra, viuzze strette e un\'architettura autentica.',
            mapLink: { name: 'Dhermi Old Village', url: 'https://www.google.com/maps?q=Dhermi+Old+Village' }
          },
          { 
            title: 'Parco Nazionale di Llogara ⭐ Must Visit',
            desc: 'Un parco nazionale straordinario a breve distanza da Dhermi, noto per i suoi monti, l\'aria pura e le viste mozzafiato sul Mar Ionio. L\'area è ideale per passeggiate nella natura, fotografia e sosta per un pasto. Presenta tradizionali taverne e ristoranti rinomati per il loro eccellente cibo — soprattutto per gli amanti della carne. Inoltre, Llogara è famosa per il parapendio.',
            mapLink: { name: 'Llogara National Park', url: 'https://www.google.com/maps?q=Llogara+National+Park' }
          },
        ],
      },
      food: {
        heading: '🍽️ Cibo & Ristorazione',
        items: [
          { 
            title: 'Alevra Restaurant',
            desc: 'Cucina tradizionale che presenta prodotti locali e sapori autentici.',
            mapLink: { name: 'Alevra Restaurant', url: 'https://www.google.com/maps?q=Alevra+Restaurant+Dhermi' }
          },
          { 
            title: 'Luciano Restaurant',
            desc: 'Cucina mediterranea e italiana in un\'elegante cornice.',
            mapLink: { name: 'Luciano Restaurant', url: 'https://www.google.com/maps?q=Luciano+Restaurant+Dhermi' }
          },
          { 
            title: 'Angelos Souvlaki & Grill',
            desc: 'Una scelta popolare per cibo veloce e delizioso con influenze greche.',
            mapLink: { name: 'Angelos Souvlaki', url: 'https://www.google.com/maps?q=Angelos+Souvlaki+Dhermi' }
          },
          { 
            title: 'Panorama Restaurant',
            desc: 'Spicca per le sue viste uniche e i tramonti spettacolari.',
            mapLink: { name: 'Panorama Restaurant', url: 'https://www.google.com/maps?q=Panorama+Restaurant+Dhermi' }
          },
        ],
      },
      beaches: {
        heading: '🌊 Spiagge',
        items: [
          { 
            title: 'Gjipe Beach',
            desc: 'Una spiaggia straordinaria con pareti di canyon drammatiche e acque cristalline.',
            mapLink: { name: 'Gjipe Beach', url: 'https://www.google.com/maps?q=Gjipe+Beach' }
          },
          { 
            title: 'Saint Andreas Beach',
            desc: 'Tranquilla e incontaminata, ideale per il relax.',
            mapLink: { name: 'Saint Andreas Beach', url: 'https://www.google.com/maps?q=Saint+Andreas+Beach+Albania' }
          },
          { 
            title: 'Gramma Bay',
            desc: 'Una baia storica con acque turchesi e una bellezza naturale unica.',
            mapLink: { name: 'Gramma Bay', url: 'https://www.google.com/maps?q=Gramma+Bay+Albania' }
          },
          { 
            title: 'Jale Beach',
            desc: 'Una spiaggia vivace con beach bar e un\'atmosfera estiva vibrante.',
            mapLink: { name: 'Jale Beach', url: 'https://www.google.com/maps?q=Jale+Beach' }
          },
        ],
      },
      zoeHora: {
        heading: '🌿 Zoe Hora',
        items: [
          {
            title: 'Zoe Hora',
            desc: 'Zoe Hora è un piccolo insediamento tradizionale arroccato sopra Dhermi, caratterizzato da case in pietra e affascinanti viste sul Mar Ionio. Offre un\'atmosfera serena e autentica, perfetta per chi cerca tranquillità.',
            mapLink: { name: 'Zoe Hora', url: 'https://www.google.com/maps?q=Zoe+Hora+Dhermi' }
          }
        ],
      },
    },
    languages: {
      al: 'Shqip',
      en: 'English',
      el: 'Ελληνικά',
      it: 'Italiano',
      es: 'Español',
      de: 'Deutsch',
      fr: 'Français',
    },
  },
  es: {
    title: 'Dhermi (Drymades) – Riviera Albanesa',
    intro: 'Dhermi (Drymades) es uno de los destinos más impresionantes de la Riviera Albanesa, renombrado por sus aguas turquesas cristalinas, playas grandes y la combinación única de montañas y mar.',
    sections: {
      introduction: {
        heading: 'Bienvenido a Dhermi',
        content: 'El pueblo no siempre estuvo en su ubicación actual. En la antigüedad, fue construido cerca del mar, en el área de "Megali Hora". Debido a las incursiones piratas y las enfermedades, los residentes se trasladaron a las colinas después del siglo 13, creando el pueblo tal como existe hoy.\n\nHoy, los callejones adoquinados, docenas de iglesias y las vistas panorámicas del Mar Jónico crean una experiencia única de hospitalidad auténtica.',
      },
      attractions: {
        heading: '🏛️ Atracciones & Experiencias',
        items: [
          { 
            title: 'Monasterio de la Natividad de la Virgen María (Manastiri i Shën Mërisë)',
            desc: 'Uno de los monumentos más antiguos de la región (siglos 13–14). Los frescos de 1781 son impresionantes, mientras que la leyenda de un tesoro escondido de la época otomana añade un aire de misterio.',
            mapLink: { name: 'Manastiri i Shën Mërisë', url: 'https://www.google.com/maps?q=Manastiri+i+Shën+Mërisë+Dhermi' }
          },
          { 
            title: 'Monasterio Sagrado de Drymades (Stavridi)',
            desc: 'El monasterio de Stavridi es uno de los sitios religiosos más distintivos e históricamente significativos de la región, combinando belleza natural, tradición y espiritualidad. Ubicado en un lugar tranquilo inmerso en la naturaleza, ofrece paz y vistas extraordinarias.\n\nSegún la tradición local, hace aproximadamente 400 años, un pastor de Drymades notó una cabra salvaje que desaparecía diariamente sin beber agua. Siguiendo una visión divina, decidió seguir al animal y descubrió un pequeño manantial donde la cabra bebía, junto con una imagen de la Virgen María (Zoe Hora—Fuente de Vida).',
            mapLink: { name: 'Stavridi Monastery', url: 'https://www.google.com/maps?q=Stavridi+Monastery+Dhermi' }
          },
          { 
            title: 'The Mill\'s Trail – Dhermi',
            desc: 'Un cautivador sendero de senderismo a lo largo de un río, perfecto para paseos a través de exuberante vegetación. Ofrece belleza natural, sombra y una experiencia pacífica en contacto con la naturaleza.',
            mapLink: { name: 'The Mill\'s Trail', url: 'https://www.google.com/maps?q=The+Mill\'s+Trail+Dhermi' }
          },
          { 
            title: 'Pueblo Antiguo de Dhermi',
            desc: 'Un asentamiento tradicional con casas de piedra, callejones estrechos y arquitectura auténtica.',
            mapLink: { name: 'Dhermi Old Village', url: 'https://www.google.com/maps?q=Dhermi+Old+Village' }
          },
          { 
            title: 'Parque Nacional de Llogara ⭐ Must Visit',
            desc: 'Un parque nacional extraordinario a corta distancia de Dhermi, conocido por sus montañas, aire puro y impresionantes vistas del Mar Jónico. El área es ideal para caminatas en la naturaleza, fotografía y parada para comer. Cuenta con tabernas tradicionales y restaurantes reconocidos por su excelente comida — especialmente para los amantes de la carne. Además, Llogara es famosa por el parapente.',
            mapLink: { name: 'Llogara National Park', url: 'https://www.google.com/maps?q=Llogara+National+Park' }
          },
        ],
      },
      food: {
        heading: '🍽️ Comida & Restaurantes',
        items: [
          { 
            title: 'Alevra Restaurant',
            desc: 'Cocina tradicional que presenta productos locales y sabores auténticos.',
            mapLink: { name: 'Alevra Restaurant', url: 'https://www.google.com/maps?q=Alevra+Restaurant+Dhermi' }
          },
          { 
            title: 'Luciano Restaurant',
            desc: 'Cocina mediterránea e italiana en un ambiente elegante.',
            mapLink: { name: 'Luciano Restaurant', url: 'https://www.google.com/maps?q=Luciano+Restaurant+Dhermi' }
          },
          { 
            title: 'Angelos Souvlaki & Grill',
            desc: 'Una opción popular para comida rápida y deliciosa con influencias griegas.',
            mapLink: { name: 'Angelos Souvlaki', url: 'https://www.google.com/maps?q=Angelos+Souvlaki+Dhermi' }
          },
          { 
            title: 'Panorama Restaurant',
            desc: 'Se destaca por sus vistas únicas y espectaculares puestas de sol.',
            mapLink: { name: 'Panorama Restaurant', url: 'https://www.google.com/maps?q=Panorama+Restaurant+Dhermi' }
          },
        ],
      },
      beaches: {
        heading: '🌊 Playas',
        items: [
          { 
            title: 'Gjipe Beach',
            desc: 'Una playa extraordinaria con paredes de cañón dramáticas y aguas cristalinas.',
            mapLink: { name: 'Gjipe Beach', url: 'https://www.google.com/maps?q=Gjipe+Beach' }
          },
          { 
            title: 'Saint Andreas Beach',
            desc: 'Tranquila y prístina, ideal para la relajación.',
            mapLink: { name: 'Saint Andreas Beach', url: 'https://www.google.com/maps?q=Saint+Andreas+Beach+Albania' }
          },
          { 
            title: 'Gramma Bay',
            desc: 'Una bahía histórica con aguas turquesas y una belleza natural única.',
            mapLink: { name: 'Gramma Bay', url: 'https://www.google.com/maps?q=Gramma+Bay+Albania' }
          },
          { 
            title: 'Jale Beach',
            desc: 'Una playa vibrante con beach bars y una atmósfera estival dinámica.',
            mapLink: { name: 'Jale Beach', url: 'https://www.google.com/maps?q=Jale+Beach' }
          },
        ],
      },
      zoeHora: {
        heading: '🌿 Zoe Hora',
        items: [
          {
            title: 'Zoe Hora',
            desc: 'Zoe Hora es un pequeño asentamiento tradicional encaramado sobre Dhermi, caracterizado por casas de piedra y encantadoras vistas del Mar Jónico. Ofrece una atmósfera serena y auténtica, perfecta para quienes buscan tranquilidad.',
            mapLink: { name: 'Zoe Hora', url: 'https://www.google.com/maps?q=Zoe+Hora+Dhermi' }
          }
        ],
      },
    },
    languages: {
      al: 'Shqip',
      en: 'English',
      el: 'Ελληνικά',
      it: 'Italiano',
      es: 'Español',
      de: 'Deutsch',
      fr: 'Français',
    },
  },
  de: {
    title: 'Dhermi (Drymades) – Albanische Riviera',
    intro: 'Dhermi (Drymades) ist eines der beeindruckendsten Ziele der Albanischen Riviera, berühmt für sein kristallklares türkises Wasser, große Strände und die einzigartige Kombination aus Bergen und Meer.',
    sections: {
      introduction: {
        heading: 'Willkommen in Dhermi',
        content: 'Das Dorf befand sich nicht immer an seinem heutigen Ort. In der Antike wurde es am Meer in der Gegend "Megali Hora" erbaut. Aufgrund von Piratenüberfällen und Krankheiten zogen die Einwohner nach dem 13. Jahrhundert in die Hügel um und schufen das Dorf, wie es heute existiert.\n\nHeute schaffen gepflasterte Gassen, Dutzende von Kirchen und Panoramablicke auf das Ionische Meer ein einzigartiges Erlebnis autentischer Gastfreundschaft.',
      },
      attractions: {
        heading: '🏛️ Attraktionen & Erlebnisse',
        items: [
          { 
            title: 'Kloster zur Geburt der Jungfrau Maria (Manastiri i Shën Mërisë)',
            desc: 'Eines der ältesten Denkmäler der Region (13.–14. Jahrhundert). Die Fresken aus dem Jahr 1781 sind beeindruckend, während die Legende eines verborgenen Schatzes aus der Osmanischen Zeit ein Hauch von Geheimnis verleiht.',
            mapLink: { name: 'Manastiri i Shën Mërisë', url: 'https://www.google.com/maps?q=Manastiri+i+Shën+Mërisë+Dhermi' }
          },
          { 
            title: 'Heiliges Kloster Drymades (Stavridi)',
            desc: 'Das Stavridi-Kloster gehört zu den charaktervollsten und geschichtlich bedeutsamsten Schauplätzen der religiösen Tradition der Region, das Naturschönheit, Tradition und Spiritualität vereint. Gelegen an einem ruhigen Ort inmitten der Natur, bietet es Friede und außergewöhnliche Ausblicke.\n\nDer lokalen Überlieferung zufolge bemerkte vor etwa 400 Jahren ein Hirte aus Drymades, dass eine Wildziege täglich verschwand, ohne Wasser zu trinken. Nach einer göttlichen Vision beschloss er, dem Tier zu folgen, und entdeckte eine kleine Quelle, an der die Ziege trank, sowie ein Bild der Jungfrau Maria (Zoe Hora—Lebensquell).',
            mapLink: { name: 'Stavridi Monastery', url: 'https://www.google.com/maps?q=Stavridi+Monastery+Dhermi' }
          },
          { 
            title: 'The Mill\'s Trail – Dhermi',
            desc: 'Ein malerischer Wanderweg entlang eines Flusses, ideal zum Spazieren durch üppige Vegetation. Bietet Naturschönheit, Schatten und ein friedliches Natururlebnis.',
            mapLink: { name: 'The Mill\'s Trail', url: 'https://www.google.com/maps?q=The+Mill\'s+Trail+Dhermi' }
          },
          { 
            title: 'Altes Dorf Dhermi',
            desc: 'Eine traditionelle Siedlung mit Steinhäusern, engen Gassen und authentischer Architektur.',
            mapLink: { name: 'Dhermi Old Village', url: 'https://www.google.com/maps?q=Dhermi+Old+Village' }
          },
          { 
            title: 'Nationalpark Llogara ⭐ Must Visit',
            desc: 'Ein beeindruckender Nationalpark in kurzer Entfernung von Dhermi, bekannt für seine Berge, klare Luft und atemberaubende Ausblicke auf das Ionische Meer. Das Gebiet ist ideal zum Wandern, Fotografieren und zum Verweilen für eine Mahlzeit. Es verfügt über traditionelle Gasthöfe und Restaurants, die für ihr hervorragendes Essen berühmt sind — besonders für Fleischliebhaber. Darüber hinaus ist Llogara für Paragliding bekannt.',
            mapLink: { name: 'Llogara National Park', url: 'https://www.google.com/maps?q=Llogara+National+Park' }
          },
        ],
      },
      food: {
        heading: '🍽️ Essen & Restaurants',
        items: [
          { 
            title: 'Alevra Restaurant',
            desc: 'Traditionelle Küche mit lokalen Produkten und authentischen Geschmäckern.',
            mapLink: { name: 'Alevra Restaurant', url: 'https://www.google.com/maps?q=Alevra+Restaurant+Dhermi' }
          },
          { 
            title: 'Luciano Restaurant',
            desc: 'Mediterrane und italienische Küche in elegantem Ambiente.',
            mapLink: { name: 'Luciano Restaurant', url: 'https://www.google.com/maps?q=Luciano+Restaurant+Dhermi' }
          },
          { 
            title: 'Angelos Souvlaki & Grill',
            desc: 'Eine beliebte Wahl für schnelle und köstliche Speisen mit griechischen Einflüssen.',
            mapLink: { name: 'Angelos Souvlaki', url: 'https://www.google.com/maps?q=Angelos+Souvlaki+Dhermi' }
          },
          { 
            title: 'Panorama Restaurant',
            desc: 'Besticht durch einzigartige Aussichten und spektakuläre Sonnenuntergänge.',
            mapLink: { name: 'Panorama Restaurant', url: 'https://www.google.com/maps?q=Panorama+Restaurant+Dhermi' }
          },
        ],
      },
      beaches: {
        heading: '🌊 Strände',
        items: [
          { 
            title: 'Gjipe Beach',
            desc: 'Ein spektakulärer Strand mit dramatischen Canyonwänden und kristallklarem Wasser.',
            mapLink: { name: 'Gjipe Beach', url: 'https://www.google.com/maps?q=Gjipe+Beach' }
          },
          { 
            title: 'Saint Andreas Beach',
            desc: 'Friedlich und unberührt, ideal zum Entspannen.',
            mapLink: { name: 'Saint Andreas Beach', url: 'https://www.google.com/maps?q=Saint+Andreas+Beach+Albania' }
          },
          { 
            title: 'Gramma Bay',
            desc: 'Eine historische Bucht mit türkisem Wasser und einzigartiger Naturschönheit.',
            mapLink: { name: 'Gramma Bay', url: 'https://www.google.com/maps?q=Gramma+Bay+Albania' }
          },
          { 
            title: 'Jale Beach',
            desc: 'Ein lebhafter Strand mit Beach Bars und lebendiger Sommeratmosphäre.',
            mapLink: { name: 'Jale Beach', url: 'https://www.google.com/maps?q=Jale+Beach' }
          },
        ],
      },
      zoeHora: {
        heading: '🌿 Zoe Hora',
        items: [
          {
            title: 'Zoe Hora',
            desc: 'Zoe Hora ist eine kleine traditionelle Siedlung auf einem Hügel über Dhermi, gekennzeichnet durch Steinhäuser und bezaubernde Aussichten auf das Ionische Meer. Es bietet eine friedliche und authentische Atmosphäre, ideal für diejenigen, die Ruhe suchen.',
            mapLink: { name: 'Zoe Hora', url: 'https://www.google.com/maps?q=Zoe+Hora+Dhermi' }
          }
        ],
      },
    },
    languages: {
      al: 'Shqip',
      en: 'English',
      el: 'Ελληνικά',
      it: 'Italiano',
      es: 'Español',
      de: 'Deutsch',
      fr: 'Français',
    },
  },
  fr: {
    title: 'Dhermi (Drymades) – Riviera Albanese',
    intro: 'Dhermi (Drymades) est l\'une des destinations les plus impressionnantes de la Riviera Albanaise, réputée pour ses eaux turquoise cristallines, ses grandes plages et la combinaison unique de montagnes et de mer.',
    sections: {
      introduction: {
        heading: 'Bienvenue à Dhermi',
        content: 'Le village ne s\'est pas toujours trouvé à son emplacement actuel. Dans l\'Antiquité, il était construit près de la mer, dans la région "Megali Hora". En raison des raids de pirates et des maladies, les habitants se sont déplacés dans les collines après le 13e siècle, créant le village tel qu\'il existe aujourd\'hui.\n\nAujourd\'hui, les ruelles pavées, des dizaines d\'églises et les vues panoramiques sur la mer ionienne créent une expérience unique d\'hospitalité authentique.',
      },
      attractions: {
        heading: '🏛️ Attractions & Expériences',
        items: [
          { 
            title: 'Monastère de la Nativité de la Mère de Dieu (Manastiri i Shën Mërisë)',
            desc: 'L\'un des plus anciens monuments de la région (13e-14e siècles). Les fresques de 1781 sont impressionnantes, tandis que la légende d\'un trésor caché à l\'époque ottomane ajoute une touche de mystère.',
            mapLink: { name: 'Manastiri i Shën Mërisë', url: 'https://www.google.com/maps?q=Manastiri+i+Shën+Mërisë+Dhermi' }
          },
          { 
            title: 'Monastère Sacré de Drymades (Stavridi)',
            desc: 'Le monastère de Stavridi est l\'un des lieux les plus caractéristiques et historiquement importants de la tradition religieuse de la région, combinant beauté naturelle, tradition et spiritualité. Situé dans un endroit paisible au cœur de la nature, il offre la paix et des vues extraordinaires.\n\nSelon la tradition locale, il y a environ 400 ans, un berger de Drymades a remarqué qu\'une chèvre sauvage disparaissait chaque jour sans boire d\'eau. Après une vision divine, il a décidé de suivre l\'animal et a découvert une petite source où la chèvre buvait, ainsi qu\'une image de la Mère de Dieu (Zoe Hora—Source de Vie).',
            mapLink: { name: 'Stavridi Monastery', url: 'https://www.google.com/maps?q=Stavridi+Monastery+Dhermi' }
          },
          { 
            title: 'The Mill\'s Trail – Dhermi',
            desc: 'Un sentier pittoresque le long d\'une rivière, idéal pour se promener à travers une végétation luxuriante. Offre de la beauté naturelle, de l\'ombre et une expérience paisible en nature.',
            mapLink: { name: 'The Mill\'s Trail', url: 'https://www.google.com/maps?q=The+Mill\'s+Trail+Dhermi' }
          },
          { 
            title: 'Vieux Village de Dhermi',
            desc: 'Un établissement traditionnel avec des maisons en pierre, des ruelles étroites et une architecture authentique.',
            mapLink: { name: 'Dhermi Old Village', url: 'https://www.google.com/maps?q=Dhermi+Old+Village' }
          },
          { 
            title: 'Parc National de Llogara ⭐ À ne pas manquer',
            desc: 'Un parc national impressionnant à courte distance de Dhermi, connu pour ses montagnes, son air pur et ses vues spectaculaires sur la mer ionienne. La région est idéale pour la randonnée, la photographie et une pause pour manger. Elle dispose de tavernes et restaurants traditionnels, célèbres pour leur excellente cuisine — particulièrement pour les amateurs de viande. De plus, Llogara est réputée pour le parapente.',
            mapLink: { name: 'Llogara National Park', url: 'https://www.google.com/maps?q=Llogara+National+Park' }
          },
        ],
      },
      food: {
        heading: '🍽️ Gastronomie & Restaurants',
        items: [
          { 
            title: 'Restaurant Alevra',
            desc: 'Cuisine traditionnelle avec des produits locaux et des saveurs authentiques.',
            mapLink: { name: 'Alevra Restaurant', url: 'https://www.google.com/maps?q=Alevra+Restaurant+Dhermi' }
          },
          { 
            title: 'Restaurant Luciano',
            desc: 'Cuisine méditerranéenne et italienne dans une ambiance élégante.',
            mapLink: { name: 'Luciano Restaurant', url: 'https://www.google.com/maps?q=Luciano+Restaurant+Dhermi' }
          },
          { 
            title: 'Angelos Souvlaki & Grill',
            desc: 'Un choix populaire pour une nourriture rapide et délicieuse avec des influences grecques.',
            mapLink: { name: 'Angelos Souvlaki', url: 'https://www.google.com/maps?q=Angelos+Souvlaki+Dhermi' }
          },
          { 
            title: 'Restaurant Panorama',
            desc: 'Remarquable pour ses vues uniques et ses coucheurs de soleil spectaculaires.',
            mapLink: { name: 'Panorama Restaurant', url: 'https://www.google.com/maps?q=Panorama+Restaurant+Dhermi' }
          },
        ],
      },
      beaches: {
        heading: '🌊 Plages',
        items: [
          { 
            title: 'Plage de Gjipe',
            desc: 'Une plage spectaculaire avec des falaises dramatiques et une eau cristalline.',
            mapLink: { name: 'Gjipe Beach', url: 'https://www.google.com/maps?q=Gjipe+Beach' }
          },
          { 
            title: 'Plage de Saint Andreas',
            desc: 'Paisible et préservée, idéale pour se détendre.',
            mapLink: { name: 'Saint Andreas Beach', url: 'https://www.google.com/maps?q=Saint+Andreas+Beach+Albania' }
          },
          { 
            title: 'Baie de Gramma',
            desc: 'Une baie historique avec une eau turquoise et une beauté naturelle unique.',
            mapLink: { name: 'Gramma Bay', url: 'https://www.google.com/maps?q=Gramma+Bay+Albania' }
          },
          { 
            title: 'Plage de Jale',
            desc: 'Une plage animée avec des beach bars et une atmosphère estivale dynamique.',
            mapLink: { name: 'Jale Beach', url: 'https://www.google.com/maps?q=Jale+Beach' }
          },
        ],
      },
      zoeHora: {
        heading: '🌿 Zoe Hora',
        items: [
          {
            title: 'Zoe Hora',
            desc: 'Zoe Hora est un petit établissement traditionnel sur une colline au-dessus de Dhermi, caractérisé par des maisons en pierre et des vues charmantes sur la mer ionienne. Il offre une atmosphère paisible et authentique, idéale pour ceux qui recherchent la tranquillité.',
            mapLink: { name: 'Zoe Hora', url: 'https://www.google.com/maps?q=Zoe+Hora+Dhermi' }
          }
        ],
      },
    },
    languages: {
      al: 'Shqip',
      en: 'English',
      el: 'Ελληνικά',
      it: 'Italiano',
      es: 'Español',
      de: 'Deutsch',
      fr: 'Français',
    },
  },
};

const flagEmojis = {
  al: '🇦🇱',
  en: '🇬🇧',
  el: '🇬🇷',
  it: '🇮🇹',
  es: '🇪🇸',
  de: '🇩🇪',
  fr: '🇫🇷',
};

export default function Home() {
  const [language, setLanguage] = useState<Language>('al');
  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Language Switcher */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-2xl mx-auto px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Logo - Left Side */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex-shrink-0 transition-transform hover:scale-105"
              aria-label="Back to top"
            >
              <img 
                src="/Dhermi-light-rooms-logo.png" 
                alt="Dhermi Light Rooms Logo"
                className="h-10 sm:h-12 w-auto"
              />
            </button>

            {/* Language Buttons - Right Side */}
            <div className="flex items-center justify-center gap-1 sm:gap-2 flex-wrap">
              {(Object.keys(flagEmojis) as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-2 sm:px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
                    language === lang
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="mr-1">{flagEmojis[lang]}</span>
                  <span className="hidden sm:inline">{currentContent.languages[lang]}</span>
                  <span className="sm:hidden">{currentContent.languages[lang].substring(0, 2)}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 py-8 sm:py-12">
        {/* Dhermi Light Rooms Branding Section */}
        <section className="mb-16 sm:mb-24 text-center">
          <div className="flex flex-col items-center gap-6 mb-8">
            <img 
              src="/Dhermi-light-rooms-logo.png" 
              alt="Dhermi Light Rooms Logo"
              className="h-64 sm:h-96 w-auto"
            />
            <p className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-wide">
              Dhermi Light Rooms Presents
            </p>
            <div className="mt-4 max-w-xl">
              <p className="text-gray-700 text-base sm:text-lg mb-4 leading-relaxed">
                Your premier accommodation on the Albanian Riviera. Experience the beauty of Dhermi with comfort, elegance, and authentic hospitality.
              </p>
              <a
                href="https://maps.app.goo.gl/aciPpF4RPW4BrofYA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md"
              >
                📍 Find Us On Google Maps
              </a>
            </div>
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-12"></div>
        </section>

        {/* Hero Section */}
        <section className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            {currentContent.title}
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            {currentContent.intro}
          </p>
        </section>

        {/* Introduction Section */}
        <section className="mb-12 sm:mb-16">
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
              {currentContent.sections.introduction.heading}
            </h2>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              {currentContent.sections.introduction.content}
            </p>
          </div>
        </section>

        {/* Attractions Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">
            {currentContent.sections.attractions.heading}
          </h2>
          <div className="space-y-4 sm:space-y-5">
            {currentContent.sections.attractions.items.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6 hover:border-blue-300 hover:shadow-md transition-all duration-200"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-3 whitespace-pre-line">
                  {item.desc}
                </p>
                <a
                  href={item.mapLink?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base transition-colors"
                >
                  📍 View on Google Maps
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Food Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">
            {currentContent.sections.food.heading}
          </h2>
          <div className="space-y-4 sm:space-y-5">
            {currentContent.sections.food.items.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-5 sm:p-6 hover:border-amber-400 hover:shadow-md transition-all duration-200"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-3">
                  {item.desc}
                </p>
                <a
                  href={item.mapLink?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base transition-colors"
                >
                  📍 View on Google Maps
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Beaches Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">
            {currentContent.sections.beaches.heading}
          </h2>
          <div className="space-y-4 sm:space-y-5">
            {currentContent.sections.beaches.items.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-5 sm:p-6 hover:border-blue-400 hover:shadow-md transition-all duration-200"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-3">
                  {item.desc}
                </p>
                <a
                  href={item.mapLink?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base transition-colors"
                >
                  📍 View on Google Maps
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Zoe Hora Section */}
        <section className="mb-12 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">
            {currentContent.sections.zoeHora.heading}
          </h2>
          <div className="space-y-4 sm:space-y-5">
            {currentContent.sections.zoeHora.items.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-5 sm:p-6 hover:border-green-400 hover:shadow-md transition-all duration-200"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-3">
                  {item.desc}
                </p>
                <a
                  href={item.mapLink?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base transition-colors"
                >
                  📍 View on Google Maps
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* QR Code Section */}
        <section className="mb-12 sm:mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 sm:p-8 border border-blue-200">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 text-center">
              Share This Guide
            </h2>
            <p className="text-gray-600 text-center mb-6 text-sm sm:text-base">
              Scan to access this guide on your mobile device
            </p>
            <div className="flex justify-center">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://dhermilightrooms.netlify.app/" 
                  alt="QR Code for Dhermi Tourism Guide"
                  width={200}
                  height={200}
                  className="rounded"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-200 pt-8 pb-12 text-center text-gray-600 text-sm sm:text-base">
          <div className="mb-6 flex justify-center">
            <img 
              src="/Dhermi-light-rooms-logo.png" 
              alt="Dhermi Light Rooms Logo"
              className="h-12 sm:h-16 w-auto"
            />
          </div>
          <div className="mb-4">
            <p className="font-semibold text-gray-900 mb-2">Dhermi Light Rooms</p>
            <p className="text-xs sm:text-sm mb-2">Your Gateway to the Albanian Riviera</p>
            <p>© 2026 All rights reserved. Property of LitsaiTechnologies.</p>
          </div>
          <div className="space-y-1 text-xs sm:text-sm">
            <p>
              <span className="font-semibold text-gray-700">Contact:</span> contact@litsaitechnologies.com
            </p>
            <p>
              <span className="font-semibold text-gray-700">Web:</span> www.litsaitechnologies.com
            </p>
          </div>
          <p className="mt-4 text-xs text-gray-500">
            Discover the beauty of the Albanian Riviera with authentic tourism guides and experiences.
          </p>
        </footer>
      </main>
    </div>
  );
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  url: string;
  image: string;
  credits?: string;
}

export const projects: Project[] = [
  {
    id: "mai-dire-eventi",
    title: "Mai Dire Eventi",
    category: "Eventi / Entertainment",
    description: "Una presenza digitale pensata per raccontare eventi, energia e intrattenimento, integrata con funzionalità ecommerce.",
    url: "https://www.maidireeventi.it",
    image: "/images/projects/mai-dire-eventi.webp"
  },
  {
    id: "we-are-no-profit",
    title: "We Are No Profit",
    category: "Non profit / Associazione",
    description: "Un progetto digitale dedicato al valore delle iniziative e delle comunità non profit.",
    url: "https://www.wearenoprofit.org",
    image: "/images/projects/we-are-no-profit.webp"
  },
  {
    id: "techzilla",
    title: "Techzilla",
    category: "Tecnologia / Editoriale",
    description: "Un ecosistema editoriale dedicato al mondo della tecnologia e dell’innovazione, realizzato da Simone Sagramati e Emanuele Strano.",
    url: "https://www.techzilla.it",
    image: "/images/projects/techzilla.webp",
    credits: "Simone Sagramati ed Emanuele Strano"
  },
  {
    id: "birrificio-babylon",
    title: "Birrificio Babylon",
    category: "Food & Beverage / Brewery",
    description: "Identità e racconto digitale per un brand del mondo brassicolo.",
    url: "https://www.birrificiobabylon.it",
    image: "/images/projects/birrificio-babylon.webp"
  },
  {
    id: "arnia-del-cuciniere",
    title: "Arnia del Cuciniere",
    category: "Food / Artigianato",
    description: "Un sito che valorizza i prodotti, la cura e la tradizione per un rinomato ristorante situato a Falconara Marittima.",
    url: "https://www.arniadelcuciniere.it",
    image: "/images/projects/arnia-del-cuciniere.webp"
  },
  {
    id: "the-primo-bistrot",
    title: "The Primo Bistrot",
    category: "Ristorazione / Hospitality",
    description: "Un’esperienza web pensata per trasmettere atmosfera, gusto e ospitalità.",
    url: "https://theprimobistrot.it/",
    image: "/images/projects/the-primo-bistrot.webp"
  },
  {
    id: "cersolea-cinest",
    title: "Cersolea Cinest",
    category: "Energia / Sostenibilità",
    description: "Un progetto digitale dedicato agli impianti fotovoltaici e alle energie rinnovabili.",
    url: "https://www.cersoleacinest.it",
    image: "/images/projects/cersonea-cinest.webp"
  },
  {
    id: "femya",
    title: "Femya",
    category: "Brand / Lifestyle",
    description: "Un'identità online essenziale, contemporanea e riconoscibile dedicata alla presentazione e vendita di opere d'arte artigianali.",
    url: "https://www.femya.it",
    image: "/images/projects/femya.webp"
  },
  {
    id: "period-drama",
    title: "Period Drama",
    category: "Cultura / Intrattenimento",
    description: "Un progetto editoriale e culturale con una forte identità tematica.",
    url: "https://www.perioddrama.com",
    image: "/images/projects/period-drama.webp"
  },
  {
    id: "associazione-cinestoria",
    title: "Associazione CineStoria",
    category: "Associazione / Cultura",
    description: "Una piattaforma per raccontare, condividere e valorizzare la cultura cinematografica.",
    url: "https://www.associnestoria.it",
    image: "/images/projects/associazione-cinestoria.webp"
  },
  {
    id: "il-trono-del-muori",
    title: "Il Trono del Muori",
    category: "Entertainment / Community",
    description: "Un progetto digitale e piattaforma ecommerce pensata per coinvolgere una community attraverso il racconto.",
    url: "https://www.iltronodelmuori.it/",
    image: "/images/projects/il-trono-del-muori.webp"
  },
  {
    id: "sport-enjoy-ssd",
    title: "Sport Enjoy SSD",
    category: "Sport / Fitness / Servizi",
    description: "Una presenza digitale dedicata a sport, movimento e servizi per le persone.",
    url: "https://www.sportenjoyssd.it/",
    image: "/images/projects/sport-enjoy-ssd.webp"
  },
  {
    id: "add-roma",
    title: "ADD Roma",
    category: "Associazione / Sport / Community",
    description: "Un progetto online per una realtà associativa, sportiva e orientata alla comunità.",
    url: "https://www.addroma.it",
    image: "/images/projects/add-roma.webp"
  },
  {
    id: "sophia-campana",
    title: "Sophia Campana",
    category: "Personal Brand / Lifestyle",
    description: "Un ecommerce e sito personale costruito per valorizzare il brand di una youtuber e ginnasta, unendo identità, stile e presenza digitale.",
    url: "https://www.sophiacampana.com",
    image: "/images/projects/sophia-campana.webp"
  }
];

let uniqueArtisticPracticeMediums = new Set();
let uniqueArtisticPracticeGenreStyle = new Set();
let uniqueArtisticPracticeTechniquesProcesses = new Set();
let uniqueArtisticPracticeThemesConcepts = new Set();
let uniqueArtisticPracticeInfluencesReferences = new Set();
let uniqueArtisticMessageSocialCommentary = new Set();
let uniqueArtisticMessagePoliticalActivismCause = new Set();
let uniqueArtisticMessageCulturalCritique = new Set();
let uniqueArtisticMessageIdentityRepresentation = new Set();
let uniqueArtisticMessageEnvironmentalSustainability = new Set();
let uniqueAestheticsColorPalette = new Set();
let uniqueAestheticsTexturePattern = new Set();
let uniqueAestheticsCompositionArrangement = new Set();
let uniqueAestheticsScaleProportion = new Set();
let uniqueAestheticsVisualLanguage = new Set();

let selectedArtisticPracticeMediums = [];
let selectedArtisticPracticeGenreStyle = [];
let selectedArtisticPracticeTechniquesProcesses = [];
let selectedArtisticPracticeThemesConcepts = [];
let selectedArtisticPracticeInfluencesReferences = [];
let selectedArtisticMessageSocialCommentary = [];
let selectedArtisticMessagePoliticalActivismCause = [];
let selectedArtisticMessageCulturalCritique = [];
let selectedArtisticMessageIdentityRepresentation = [];
let selectedArtisticMessageEnvironmentalSustainability = [];
let selectedAestheticsColorPalette = [];
let selectedAestheticsTexturePattern = [];
let selectedAestheticsCompositionArrangement = [];
let selectedAestheticsScaleProportion = [];
let selectedAestheticsVisualLanguage = [];

let mybutton;
let mybutton2;

function setup() {
  noCanvas();

  for (const artist of artists) {
    if (artist["artisticPractice-mediums"]) {
      artist["artisticPractice-mediums"].forEach(value => uniqueArtisticPracticeMediums.add(value));
    }
    if (artist["artisticPractice-genreStyle"]) {
      uniqueArtisticPracticeGenreStyle.add(artist["artisticPractice-genreStyle"]);
    }
    if (artist["artisticPractice-techniquesProcesses"]) {
      artist["artisticPractice-techniquesProcesses"].forEach(value => uniqueArtisticPracticeTechniquesProcesses.add(value));
    }
    if (artist["artisticPractice-themesConcepts"]) {
      artist["artisticPractice-themesConcepts"].forEach(value => uniqueArtisticPracticeThemesConcepts.add(value));
    }
    if (artist["artisticPractice-influencesReferences"]) {
      artist["artisticPractice-influencesReferences"].forEach(value => uniqueArtisticPracticeInfluencesReferences.add(value));
    }
    if (artist["artisticMessage-socialCommentary"]) {
      artist["artisticMessage-socialCommentary"].forEach(value => uniqueArtisticMessageSocialCommentary.add(value));
    }
    if (artist["artisticMessage-politicalActivismCause"]) {
      artist["artisticMessage-politicalActivismCause"].forEach(value => uniqueArtisticMessagePoliticalActivismCause.add(value));
    }
    if (artist["artisticMessage-culturalCritique"]) {
      artist["artisticMessage-culturalCritique"].forEach(value => uniqueArtisticMessageCulturalCritique.add(value));
    }
    if (artist["artisticMessage-identityRepresentation"]) {
      artist["artisticMessage-identityRepresentation"].forEach(value => uniqueArtisticMessageIdentityRepresentation.add(value));
    }
    if (artist["artisticMessage-environmentalSustainability"]) {
      artist["artisticMessage-environmentalSustainability"].forEach(value => uniqueArtisticMessageEnvironmentalSustainability.add(value));
    }
    if (artist["aesthetics-colorPalette"]) {
      uniqueAestheticsColorPalette.add(artist["aesthetics-colorPalette"]);
    }
    if (artist["aesthetics-texturePattern"]) {
      uniqueAestheticsTexturePattern.add(artist["aesthetics-texturePattern"]);
    }
    if (artist["aesthetics-compositionArrangement"]) {
      uniqueAestheticsCompositionArrangement.add(artist["aesthetics-compositionArrangement"]);
    }
    if (artist["aesthetics-scaleProportion"]) {
      uniqueAestheticsScaleProportion.add(artist["aesthetics-scaleProportion"]);
    }
    if (artist["aesthetics-visualLanguage"]) {
      uniqueAestheticsVisualLanguage.add(artist["aesthetics-visualLanguage"]);
    }
  }

  createCheckboxOptions(uniqueArtisticPracticeMediums, selectedArtisticPracticeMediums, "Artistic Practice - Mediums");
  createCheckboxOptions(uniqueArtisticPracticeGenreStyle, selectedArtisticPracticeGenreStyle, "Artistic Practice - Genre Style");
  createCheckboxOptions(uniqueArtisticPracticeTechniquesProcesses, selectedArtisticPracticeTechniquesProcesses, "Artistic Practice - Techniques/Processes");
  createCheckboxOptions(uniqueArtisticPracticeThemesConcepts, selectedArtisticPracticeThemesConcepts, "Artistic Practice - Themes/Concepts");
  createCheckboxOptions(uniqueArtisticPracticeInfluencesReferences, selectedArtisticPracticeInfluencesReferences, "Artistic Practice - Influences/References");
  createCheckboxOptions(uniqueArtisticMessageSocialCommentary, selectedArtisticMessageSocialCommentary, "Artistic Message - Social Commentary");
  createCheckboxOptions(uniqueArtisticMessagePoliticalActivismCause, selectedArtisticMessagePoliticalActivismCause, "Artistic Message - Political Activism/Cause");
  createCheckboxOptions(uniqueArtisticMessageCulturalCritique, selectedArtisticMessageCulturalCritique, "Artistic Message - Cultural Critique");
  createCheckboxOptions(uniqueArtisticMessageIdentityRepresentation, selectedArtisticMessageIdentityRepresentation, "Artistic Message - Identity Representation");
  createCheckboxOptions(uniqueArtisticMessageEnvironmentalSustainability, selectedArtisticMessageEnvironmentalSustainability, "Artistic Message - Environmental Sustainability");
  createCheckboxOptions(uniqueAestheticsColorPalette, selectedAestheticsColorPalette, "Aesthetics - Color Palette");
  createCheckboxOptions(uniqueAestheticsTexturePattern, selectedAestheticsTexturePattern, "Aesthetics - Texture Pattern");
  createCheckboxOptions(uniqueAestheticsCompositionArrangement, selectedAestheticsCompositionArrangement, "Aesthetics - Composition/Arrangement");
  createCheckboxOptions(uniqueAestheticsScaleProportion, selectedAestheticsScaleProportion, "Aesthetics - Scale/Proportion");
  createCheckboxOptions(uniqueAestheticsVisualLanguage, selectedAestheticsVisualLanguage, "Aesthetics - Visual Language");

  mybutton = createButton("Find artists with Any Matches");
  mybutton.mouseClicked(createList);

  mybutton2 = createButton("Find artists Exact Matches");
  mybutton2.mouseClicked(createList2);
}

function createCheckboxOptions(options, selected, label) {
  let checkboxDiv = createDiv();
  let heading = createElement('h4', label);
  heading.parent(checkboxDiv);

  for (let option of options) {
    let checkbox = createCheckbox(option);
    checkbox.parent(checkboxDiv);
    checkbox.changed(() => {
      if (checkbox.checked()) {
        selected.push(option);
      } else {
        selected = selected.filter(item => item !== option);
      }
    });
  }

  checkboxDiv.parent(document.body);
}

function createList() {
    let matchingArtists = [];
  
    for (const artist of artists) {
      if (
        selectedArtisticPracticeMediums.some(value => artist["artisticPractice-mediums"].includes(value)) ||
        selectedArtisticPracticeGenreStyle.includes(artist["artisticPractice-genreStyle"]) ||
        selectedArtisticPracticeTechniquesProcesses.some(value => artist["artisticPractice-techniquesProcesses"] && artist["artisticPractice-techniquesProcesses"].includes(value)) ||
        selectedArtisticPracticeThemesConcepts.some(value => artist["artisticPractice-themesConcepts"] && artist["artisticPractice-themesConcepts"].includes(value)) ||
        selectedArtisticPracticeInfluencesReferences.some(value => artist["artisticPractice-influencesReferences"] && artist["artisticPractice-influencesReferences"].includes(value)) ||
        selectedArtisticMessageSocialCommentary.some(value => artist["artisticMessage-socialCommentary"] && artist["artisticMessage-socialCommentary"].includes(value)) ||
        selectedArtisticMessagePoliticalActivismCause.some(value => artist["artisticMessage-politicalActivismCause"] && artist["artisticMessage-politicalActivismCause"].includes(value)) ||
        selectedArtisticMessageCulturalCritique.some(value => artist["artisticMessage-culturalCritique"] && artist["artisticMessage-culturalCritique"].includes(value)) ||
        selectedArtisticMessageIdentityRepresentation.some(value => artist["artisticMessage-identityRepresentation"] && artist["artisticMessage-identityRepresentation"].includes(value)) ||
        selectedArtisticMessageEnvironmentalSustainability.some(value => artist["artisticMessage-environmentalSustainability"] && artist["artisticMessage-environmentalSustainability"].includes(value)) ||
        selectedAestheticsColorPalette.includes(artist["aesthetics-colorPalette"]) ||
        selectedAestheticsTexturePattern.includes(artist["aesthetics-texturePattern"]) ||
        selectedAestheticsCompositionArrangement.includes(artist["aesthetics-compositionArrangement"]) ||
        selectedAestheticsScaleProportion.includes(artist["aesthetics-scaleProportion"]) ||
        selectedAestheticsVisualLanguage.includes(artist["aesthetics-visualLanguage"])
      ) {
        matchingArtists.push(artist);
      }
    }
  
    if (matchingArtists.length > 0) {
      let artistList = createElement('ul');
      for (const artist of matchingArtists) {
        let listItem = createElement('li', artist.personalInformation.name);
        listItem.parent(artistList);
      }
    } else {
      let noMatchMessage = createElement('p', 'No artists match the selected criteria.');
      noMatchMessage.parent(document.body);
    }
  }




  function createList2() {
    // Create an array to store artists that match all selected criteria
    let matchingArtists = [];
  
    for (const artist of artists) {
      // Check if all selected properties match with the artist
      if (
        selectedArtisticPracticeMediums.every(value => artist["artisticPractice-mediums"] && artist["artisticPractice-mediums"].includes(value)) &&
        selectedArtisticPracticeGenreStyle.includes(artist["artisticPractice-genreStyle"]) &&
        selectedArtisticPracticeTechniquesProcesses.every(value => artist["artisticPractice-techniquesProcesses"] && artist["artisticPractice-techniquesProcesses"].includes(value)) &&
        selectedArtisticPracticeThemesConcepts.every(value => artist["artisticPractice-themesConcepts"] && artist["artisticPractice-themesConcepts"].includes(value)) &&
        selectedArtisticPracticeInfluencesReferences.every(value => artist["artisticPractice-influencesReferences"] && artist["artisticPractice-influencesReferences"].includes(value)) &&
        selectedArtisticMessageSocialCommentary.every(value => artist["artisticMessage-socialCommentary"] && artist["artisticMessage-socialCommentary"].includes(value)) &&
        selectedArtisticMessagePoliticalActivismCause.every(value => artist["artisticMessage-politicalActivismCause"] && artist["artisticMessage-politicalActivismCause"].includes(value)) &&
        selectedArtisticMessageCulturalCritique.every(value => artist["artisticMessage-culturalCritique"] && artist["artisticMessage-culturalCritique"].includes(value)) &&
        selectedArtisticMessageIdentityRepresentation.every(value => artist["artisticMessage-identityRepresentation"] && artist["artisticMessage-identityRepresentation"].includes(value)) &&
        selectedArtisticMessageEnvironmentalSustainability.every(value => artist["artisticMessage-environmentalSustainability"] && artist["artisticMessage-environmentalSustainability"].includes(value)) &&
        selectedAestheticsColorPalette.includes(artist["aesthetics-colorPalette"]) &&
        selectedAestheticsTexturePattern.includes(artist["aesthetics-texturePattern"]) &&
        selectedAestheticsCompositionArrangement.includes(artist["aesthetics-compositionArrangement"]) &&
        selectedAestheticsScaleProportion.includes(artist["aesthetics-scaleProportion"]) &&
        selectedAestheticsVisualLanguage.includes(artist["aesthetics-visualLanguage"])
      ) {
        matchingArtists.push(artist);
      }
    }
  
    // Display the list of matching artists
    if (matchingArtists.length > 0) {
      let artistList = createElement('ul');
      for (const artist of matchingArtists) {
        let listItem = createElement('li', artist.personalInformation.name);
        listItem.parent(artistList);
      }
    } else {
      let noMatchMessage = createElement('p', 'No artists match all the selected criteria.');
      noMatchMessage.parent(document.body);
    }
  }
  
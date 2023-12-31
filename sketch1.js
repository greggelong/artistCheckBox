let uniqueArtisticPracticeMediums = new Set();
let uniqueArtisticPracticeGenreStyle = new Set();
let uniqueArtisticPracticeTechniquesProcesses = new Set();
let uniqueArtisticPracticeThemesConcepts = new Set();
//let uniqueArtisticPracticeInfluencesReferences = new Set();
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
//let selectedArtisticPracticeInfluencesReferences = [];
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

let mybutton; //inclusive matching
let mybutton2; //strict matching
let mybutton3; // partial matching with optional Properties
let mybutton4; // counter

function setup() {
  noCanvas();

  for (const artist of artists) {
    if (artist["artisticPractice-mediums"]) {
      artist["artisticPractice-mediums"].forEach((value) =>
        uniqueArtisticPracticeMediums.add(value)
      );
    }
    if (artist["artisticPractice-genreStyle"]) {
      artist["artisticPractice-genreStyle"].forEach((value) =>
        uniqueArtisticPracticeGenreStyle.add(value)
      );
    }
    if (artist["artisticPractice-techniquesProcesses"]) {
      artist["artisticPractice-techniquesProcesses"].forEach((value) =>
        uniqueArtisticPracticeTechniquesProcesses.add(value)
      );
    }
    if (artist["artisticPractice-themesConcepts"]) {
      artist["artisticPractice-themesConcepts"].forEach((value) =>
        uniqueArtisticPracticeThemesConcepts.add(value)
      );
    }
    //if (artist["artisticPractice-influencesReferences"]) {
    // artist["artisticPractice-influencesReferences"].forEach(value => uniqueArtisticPracticeInfluencesReferences.add(value));
    //}
    if (artist["artisticMessage-socialCommentary"]) {
      artist["artisticMessage-socialCommentary"].forEach((value) =>
        uniqueArtisticMessageSocialCommentary.add(value)
      );
    }
    if (artist["artisticMessage-politicalActivismCause"]) {
      artist["artisticMessage-politicalActivismCause"].forEach((value) =>
        uniqueArtisticMessagePoliticalActivismCause.add(value)
      );
    }
    if (artist["artisticMessage-culturalCritique"]) {
      artist["artisticMessage-culturalCritique"].forEach((value) =>
        uniqueArtisticMessageCulturalCritique.add(value)
      );
    }
    if (artist["artisticMessage-identityRepresentation"]) {
      artist["artisticMessage-identityRepresentation"].forEach((value) =>
        uniqueArtisticMessageIdentityRepresentation.add(value)
      );
    }
    if (artist["artisticMessage-environmentalSustainability"]) {
      artist["artisticMessage-environmentalSustainability"].forEach((value) =>
        uniqueArtisticMessageEnvironmentalSustainability.add(value)
      );
    }
    if (artist["aesthetics-colorPalette"]) {
      artist["aesthetics-colorPalette"].forEach((value) =>
        uniqueAestheticsColorPalette.add(value)
      ); // changing strings to arrays
      if (artist["aesthetics-texturePattern"]) {
        artist["aesthetics-texturePattern"].forEach((value) =>
          uniqueAestheticsTexturePattern.add(value)
        );
      }
      if (artist["aesthetics-compositionArrangement"]) {
        artist["aesthetics-compositionArrangement"].forEach((value) =>
          uniqueAestheticsCompositionArrangement.add(value)
        );
      }
      if (artist["aesthetics-scaleProportion"]) {
        artist["aesthetics-scaleProportion"].forEach((value) =>
          uniqueAestheticsScaleProportion.add(value)
        );
      }
      if (artist["aesthetics-visualLanguage"]) {
        artist["aesthetics-visualLanguage"].forEach((value) =>
          uniqueAestheticsVisualLanguage.add(value)
        );
      }
    }
  }

  createCheckboxOptions(
    uniqueArtisticPracticeMediums,
    selectedArtisticPracticeMediums,
    "Artistic Practice - Mediums"
  );
  createCheckboxOptions(
    uniqueArtisticPracticeGenreStyle,
    selectedArtisticPracticeGenreStyle,
    "Artistic Practice - Genre Style"
  );
  createCheckboxOptions(
    uniqueArtisticPracticeTechniquesProcesses,
    selectedArtisticPracticeTechniquesProcesses,
    "Artistic Practice - Techniques/Processes"
  );
  createCheckboxOptions(
    uniqueArtisticPracticeThemesConcepts,
    selectedArtisticPracticeThemesConcepts,
    "Artistic Practice - Themes/Concepts"
  );
  //createCheckboxOptions(uniqueArtisticPracticeInfluencesReferences, selectedArtisticPracticeInfluencesReferences, "Artistic Practice - Influences/References");
  createCheckboxOptions(
    uniqueArtisticMessageSocialCommentary,
    selectedArtisticMessageSocialCommentary,
    "Artistic Message - Social Commentary"
  );
  createCheckboxOptions(
    uniqueArtisticMessagePoliticalActivismCause,
    selectedArtisticMessagePoliticalActivismCause,
    "Artistic Message - Political Activism/Cause"
  );
  createCheckboxOptions(
    uniqueArtisticMessageCulturalCritique,
    selectedArtisticMessageCulturalCritique,
    "Artistic Message - Cultural Critique"
  );
  createCheckboxOptions(
    uniqueArtisticMessageIdentityRepresentation,
    selectedArtisticMessageIdentityRepresentation,
    "Artistic Message - Identity Representation"
  );
  createCheckboxOptions(
    uniqueArtisticMessageEnvironmentalSustainability,
    selectedArtisticMessageEnvironmentalSustainability,
    "Artistic Message - Environmental Sustainability"
  );
  createCheckboxOptions(
    uniqueAestheticsColorPalette,
    selectedAestheticsColorPalette,
    "Aesthetics - Color Palette"
  );
  createCheckboxOptions(
    uniqueAestheticsTexturePattern,
    selectedAestheticsTexturePattern,
    "Aesthetics - Texture Pattern"
  );
  createCheckboxOptions(
    uniqueAestheticsCompositionArrangement,
    selectedAestheticsCompositionArrangement,
    "Aesthetics - Composition/Arrangement"
  );
  createCheckboxOptions(
    uniqueAestheticsScaleProportion,
    selectedAestheticsScaleProportion,
    "Aesthetics - Scale/Proportion"
  );
  createCheckboxOptions(
    uniqueAestheticsVisualLanguage,
    selectedAestheticsVisualLanguage,
    "Aesthetics - Visual Language"
  );
  createP("------------------");
  createP("CLICK TO CHOOSE, can click multiple");

  mybutton = createButton("Inclusive Matching Artists");
  mybutton.mouseClicked(createList);

  mybutton2 = createButton("Strict Matching Artists");
  mybutton2.mouseClicked(createList2);

  mybutton3 = createButton("Loose Matching Artists");
  mybutton3.mouseClicked(createList3);

  
  mybutton4 = createButton("Inclusive Matching with Counter")
  mybutton4.mouseClicked(createList4)
}

function createCheckboxOptions(options, selected, label) {
  let checkboxDiv = createDiv();
  let heading = createElement("h4", label);
  heading.parent(checkboxDiv);

  for (let option of options) {
    let checkbox = createCheckbox(option);
    checkbox.parent(checkboxDiv);
    checkbox.changed(() => {
      if (checkbox.checked()) {
        selected.push(option);
      } else {
        selected = selected.filter((item) => item !== option);
      }
    });
  }

  checkboxDiv.parent(document.body);
}

function createList() {
  //**Inclusive Matching:** Any selected property allows for inclusion
  let matchingArtists = [];

  for (const artist of artists) {
    if (
      selectedArtisticPracticeMediums.some((value) =>
        artist["artisticPractice-mediums"].includes(value)
      ) ||
      selectedArtisticPracticeGenreStyle.some(
        (value) => artist["artisticPractice-genreStyle"].includes(value) // changed from string to array
      ) ||
      selectedArtisticPracticeTechniquesProcesses.some(
        (value) =>
          artist["artisticPractice-techniquesProcesses"] &&
          artist["artisticPractice-techniquesProcesses"].includes(value)
      ) ||
      selectedArtisticPracticeThemesConcepts.some(
        (value) =>
          artist["artisticPractice-themesConcepts"] &&
          artist["artisticPractice-themesConcepts"].includes(value)
      ) ||
      //selectedArtisticPracticeInfluencesReferences.some(value => artist["artisticPractice-influencesReferences"] && artist["artisticPractice-influencesReferences"].includes(value)) ||
      selectedArtisticMessageSocialCommentary.some(
        (value) =>
          artist["artisticMessage-socialCommentary"] &&
          artist["artisticMessage-socialCommentary"].includes(value)
      ) ||
      selectedArtisticMessagePoliticalActivismCause.some(
        (value) =>
          artist["artisticMessage-politicalActivismCause"] &&
          artist["artisticMessage-politicalActivismCause"].includes(value)
      ) ||
      selectedArtisticMessageCulturalCritique.some(
        (value) =>
          artist["artisticMessage-culturalCritique"] &&
          artist["artisticMessage-culturalCritique"].includes(value)
      ) ||
      selectedArtisticMessageIdentityRepresentation.some(
        (value) =>
          artist["artisticMessage-identityRepresentation"] &&
          artist["artisticMessage-identityRepresentation"].includes(value)
      ) ||
      selectedArtisticMessageEnvironmentalSustainability.some(
        (value) =>
          artist["artisticMessage-environmentalSustainability"] &&
          artist["artisticMessage-environmentalSustainability"].includes(value)
      ) ||
      selectedAestheticsColorPalette.some(
        (value) =>
          artist["aesthetics-colorPalette"] &&
          artist["aesthetics-colorPalette"].includes(value)
      ) ||
      selectedAestheticsTexturePattern.some(
        (value) =>
          artist["aesthetics-texturePattern"] &&
          artist["aesthetics-texturePattern"].includes(value)
      ) ||
      selectedAestheticsCompositionArrangement.some(
        (value) =>
          artist["aesthetics-compositionArrangement"] &&
          artist["aesthetics-compositionArrangement"].includes(value)
      ) ||
      selectedAestheticsScaleProportion.some(
        (value) =>
          artist["aesthetics-scaleProportion"] &&
          artist["aesthetics-scaleProportion"].includes(value)
      ) ||
      selectedAestheticsVisualLanguage.some(
        (value) =>
          artist["aesthetics-visualLanguage"] &&
          artist["aesthetics-visualLanguage"].includes(value)
      )
    ) {
      matchingArtists.push(artist);
    }
  }

  if (matchingArtists.length > 0) {
    let artistList = createElement("ul");
    for (const artist of matchingArtists) {
      let listItem = createElement("li", artist.personalInformation.name);
      listItem.parent(artistList);
    }
  } else {
    let noMatchMessage = createElement(
      "p",
      "No artists match the selected criteria."
    );
    noMatchMessage.parent(document.body);
  }
}

function createList2() {
  //**Strict Matching:** All selected properties must match.
  let matchingArtists = [];
  print(selectedArtisticPracticeMediums.length);
  for (const artist of artists) {
    const artisticPracticeMediumsMatch = (
      selectedArtisticPracticeMediums.length > 0 &&
      selectedArtisticPracticeMediums.every((value) => artist["artisticPractice-mediums"].includes(value))
    );
  
    const artisticPracticeGenreStyleMatch = (
      selectedArtisticPracticeGenreStyle.length > 0 &&
      selectedArtisticPracticeGenreStyle.every((value) => artist["artisticPractice-genreStyle"].includes(value))
    );
  
    const artisticPracticeTechniquesProcessesMatch = (
      selectedArtisticPracticeTechniquesProcesses.length > 0 &&
      selectedArtisticPracticeTechniquesProcesses.every((value) =>
        artist["artisticPractice-techniquesProcesses"] && artist["artisticPractice-techniquesProcesses"].includes(value)
      )
    );
  
    const artisticPracticeThemesConceptsMatch = (
      selectedArtisticPracticeThemesConcepts.length > 0 &&
      selectedArtisticPracticeThemesConcepts.every((value) =>
        artist["artisticPractice-themesConcepts"] && artist["artisticPractice-themesConcepts"].includes(value)
      )
    );
  
    const artisticMessageSocialCommentaryMatch = (
      selectedArtisticMessageSocialCommentary.length > 0 &&
      selectedArtisticMessageSocialCommentary.every((value) =>
        artist["artisticMessage-socialCommentary"] && artist["artisticMessage-socialCommentary"].includes(value)
      )
    );
  
    const artisticMessagePoliticalActivismCauseMatch = (
      selectedArtisticMessagePoliticalActivismCause.length > 0 &&
      selectedArtisticMessagePoliticalActivismCause.every((value) =>
        artist["artisticMessage-politicalActivismCause"] && artist["artisticMessage-politicalActivismCause"].includes(value)
      )
    );
  
    const artisticMessageCulturalCritiqueMatch = (
      selectedArtisticMessageCulturalCritique.length > 0 &&
      selectedArtisticMessageCulturalCritique.every((value) =>
        artist["artisticMessage-culturalCritique"] && artist["artisticMessage-culturalCritique"].includes(value)
      )
    );
  
    const artisticMessageIdentityRepresentationMatch = (
      selectedArtisticMessageIdentityRepresentation.length > 0 &&
      selectedArtisticMessageIdentityRepresentation.every((value) =>
        artist["artisticMessage-identityRepresentation"] && artist["artisticMessage-identityRepresentation"].includes(value)
      )
    );
  
    const artisticMessageEnvironmentalSustainabilityMatch = (
      selectedArtisticMessageEnvironmentalSustainability.length > 0 &&
      selectedArtisticMessageEnvironmentalSustainability.every((value) =>
        artist["artisticMessage-environmentalSustainability"] && artist["artisticMessage-environmentalSustainability"].includes(value)
      )
    );
  
    const aestheticsColorPaletteMatch = (
      selectedAestheticsColorPalette.length > 0 &&
      selectedAestheticsColorPalette.every((value) => artist["aesthetics-colorPalette"].includes(value))
    );
  
    const aestheticsTexturePatternMatch = (
      selectedAestheticsTexturePattern.length > 0 &&
      selectedAestheticsTexturePattern.every((value) => artist["aesthetics-texturePattern"].includes(value))
    );
  
    const aestheticsCompositionArrangementMatch = (
      selectedAestheticsCompositionArrangement.length > 0 &&
      selectedAestheticsCompositionArrangement.every((value) => artist["aesthetics-compositionArrangement"].includes(value))
    );
  
    const aestheticsScaleProportionMatch = (
      selectedAestheticsScaleProportion.length > 0 &&
      selectedAestheticsScaleProportion.every((value) => artist["aesthetics-scaleProportion"].includes(value))
    );
  
    const aestheticsVisualLanguageMatch = (
      selectedAestheticsVisualLanguage.length > 0 &&
      selectedAestheticsVisualLanguage.every((value) => artist["aesthetics-visualLanguage"].includes(value))
    );
  
    if (
      artisticPracticeMediumsMatch &&
      artisticPracticeGenreStyleMatch &&
      artisticPracticeTechniquesProcessesMatch &&
      artisticPracticeThemesConceptsMatch &&
      artisticMessageSocialCommentaryMatch &&
      artisticMessagePoliticalActivismCauseMatch &&
      artisticMessageCulturalCritiqueMatch &&
      artisticMessageIdentityRepresentationMatch &&
      artisticMessageEnvironmentalSustainabilityMatch &&
      aestheticsColorPaletteMatch &&
      aestheticsTexturePatternMatch &&
      aestheticsCompositionArrangementMatch &&
      aestheticsScaleProportionMatch &&
      aestheticsVisualLanguageMatch
    ) {
      matchingArtists.push(artist);
    }
  }
  

  if (matchingArtists.length > 0) {
    let artistList = createElement("ul");
    for (const artist of matchingArtists) {
      let listItem = createElement("li", artist.personalInformation.name);
      listItem.parent(artistList);
    }
  } else {
    let noMatchMessage = createElement(
      "p",
      "No artists match the selected criteria."
    );
    noMatchMessage.parent(document.body);
  }
}

function createList3() {
  //**Partial Matching with Optional Properties:** All selected properties must match, but other properties can be present without affecting the match.
  let matchingArtists = [];

  for (const artist of artists) {
    if (
      selectedArtisticPracticeMediums.some((value) =>
        artist["artisticPractice-mediums"].includes(value)
      ) &&
      selectedArtisticPracticeGenreStyle.some(
        (value) => artist["artisticPractice-genreStyle"].includes(value) // changed from string to array
      ) &&
      selectedArtisticPracticeTechniquesProcesses.some(
        (value) =>
          artist["artisticPractice-techniquesProcesses"] &&
          artist["artisticPractice-techniquesProcesses"].includes(value)
      ) &&
      selectedArtisticPracticeThemesConcepts.some(
        (value) =>
          artist["artisticPractice-themesConcepts"] &&
          artist["artisticPractice-themesConcepts"].includes(value)
      ) &&
      //selectedArtisticPracticeInfluencesReferences.some(value => artist["artisticPractice-influencesReferences"] && artist["artisticPractice-influencesReferences"].includes(value)) ||
      selectedArtisticMessageSocialCommentary.some(
        (value) =>
          artist["artisticMessage-socialCommentary"] &&
          artist["artisticMessage-socialCommentary"].includes(value)
      ) &&
      selectedArtisticMessagePoliticalActivismCause.some(
        (value) =>
          artist["artisticMessage-politicalActivismCause"] &&
          artist["artisticMessage-politicalActivismCause"].includes(value)
      ) &&
      selectedArtisticMessageCulturalCritique.some(
        (value) =>
          artist["artisticMessage-culturalCritique"] &&
          artist["artisticMessage-culturalCritique"].includes(value)
      ) &&
      selectedArtisticMessageIdentityRepresentation.some(
        (value) =>
          artist["artisticMessage-identityRepresentation"] &&
          artist["artisticMessage-identityRepresentation"].includes(value)
      ) &&
      selectedArtisticMessageEnvironmentalSustainability.some(
        (value) =>
          artist["artisticMessage-environmentalSustainability"] &&
          artist["artisticMessage-environmentalSustainability"].includes(value)
      ) &&
      selectedAestheticsColorPalette.some(
        (value) =>
          artist["aesthetics-colorPalette"] &&
          artist["aesthetics-colorPalette"].includes(value)
      ) &&
      selectedAestheticsTexturePattern.some(
        (value) =>
          artist["aesthetics-texturePattern"] &&
          artist["aesthetics-texturePattern"].includes(value)
      ) &&
      selectedAestheticsCompositionArrangement.some(
        (value) =>
          artist["aesthetics-compositionArrangement"] &&
          artist["aesthetics-compositionArrangement"].includes(value)
      ) &&
      selectedAestheticsScaleProportion.some(
        (value) =>
          artist["aesthetics-scaleProportion"] &&
          artist["aesthetics-scaleProportion"].includes(value)
      ) &&
      selectedAestheticsVisualLanguage.some(
        (value) =>
          artist["aesthetics-visualLanguage"] &&
          artist["aesthetics-visualLanguage"].includes(value)
      )
    ) {
      matchingArtists.push(artist);
    }
  }

  if (matchingArtists.length > 0) {
    let artistList = createElement("ul");
    for (const artist of matchingArtists) {
      let listItem = createElement("li", artist.personalInformation.name);
      listItem.parent(artistList);
    }
  } else {
    let noMatchMessage = createElement(
      "p",
      "No artists match the selected criteria."
    );
    noMatchMessage.parent(document.body);
  }
}


function createList4() {
  //**Inclusive Matching:** Any selected property allows for inclusion
  let matchingArtists = [];

  for (const artist of artists) {
    let counter =0;
    // change below to if statements and increment counter each time one is checked with for each  and arrow function with a conditional  then append it to the artist name
    if (
      selectedArtisticPracticeMediums.some((value) =>
        artist["artisticPractice-mediums"].includes(value)
      ) ) {selectedArtisticPracticeMediums.forEach((value) => {if (artist["artisticPractice-mediums"].includes(value)){counter++}})}
    if (
      selectedArtisticPracticeGenreStyle.some(
        (value) => artist["artisticPractice-genreStyle"].includes(value) // changed from string to array
      )) {selectedArtisticPracticeGenreStyle.forEach((value) => {if (artist["artisticPractice-genreStyle"].includes(value)){counter++}})}
    if (
      selectedArtisticPracticeTechniquesProcesses.some(
        (value) =>
          artist["artisticPractice-techniquesProcesses"] &&
          artist["artisticPractice-techniquesProcesses"].includes(value)
      )) {selectedArtisticPracticeTechniquesProcesses.forEach((value) => {if (artist["artisticPractice-techniquesProcesses"].includes(value)){counter++}})}
    if (
      selectedArtisticPracticeThemesConcepts.some(
        (value) =>
          artist["artisticPractice-themesConcepts"] &&
          artist["artisticPractice-themesConcepts"].includes(value)
      ))  {selectedArtisticPracticeThemesConcepts.forEach((value) => {if (artist["artisticPractice-themesConcepts"].includes(value)){counter++}})}
     if (
      selectedArtisticMessageSocialCommentary.some(
        (value) =>
          artist["artisticMessage-socialCommentary"] &&
          artist["artisticMessage-socialCommentary"].includes(value)
      ))  {selectedArtisticMessageSocialCommentary.forEach((value) => {if (artist["artisticMessage-socialCommentary"].includes(value)){counter++}})}
      if (
      selectedArtisticMessagePoliticalActivismCause.some(
        (value) =>
          artist["artisticMessage-politicalActivismCause"] &&
          artist["artisticMessage-politicalActivismCause"].includes(value)
      )) {selectedArtisticMessagePoliticalActivismCause.forEach((value) => {if (artist["artisticMessage-politicalActivismCause"].includes(value)){counter++}})}
      if (
      selectedArtisticMessageCulturalCritique.some(
        (value) =>
          artist["artisticMessage-culturalCritique"] &&
          artist["artisticMessage-culturalCritique"].includes(value)
      )) {selectedArtisticMessageCulturalCritique.forEach((value) => {if (artist["artisticMessage-culturalCritique"].includes(value)){counter++}})}
      if (
      selectedArtisticMessageIdentityRepresentation.some(
        (value) =>
          artist["artisticMessage-identityRepresentation"] &&
          artist["artisticMessage-identityRepresentation"].includes(value)
      ) )  {selectedArtisticMessageIdentityRepresentation.forEach((value) => {if (artist["artisticMessage-identityRepresentation"].includes(value)){counter++}})}
      if (
      selectedArtisticMessageEnvironmentalSustainability.some(
        (value) =>
          artist["artisticMessage-environmentalSustainability"] &&
          artist["artisticMessage-environmentalSustainability"].includes(value)
      ))  {selectedArtisticMessageEnvironmentalSustainability.forEach((value) => {if (artist["artisticMessage-environmentalSustainability"].includes(value)){counter++}})}
      if (
      selectedAestheticsColorPalette.some(
        (value) =>
          artist["aesthetics-colorPalette"] &&
          artist["aesthetics-colorPalette"].includes(value)
      ))  {selectedAestheticsColorPalette.forEach((value) => {if (artist["aesthetics-colorPalette"].includes(value)){counter++}})}
      if (
      selectedAestheticsTexturePattern.some(
        (value) =>
          artist["aesthetics-texturePattern"] &&
          artist["aesthetics-texturePattern"].includes(value)
      ))  {selectedAestheticsTexturePattern.forEach((value) => {if (artist["aesthetics-texturePattern"].includes(value)){counter++}})}
      if (
      selectedAestheticsCompositionArrangement.some(
        (value) =>
          artist["aesthetics-compositionArrangement"] &&
          artist["aesthetics-compositionArrangement"].includes(value)
      ))  {selectedAestheticsCompositionArrangement.forEach((value) => {if (artist["aesthetics-compositionArrangement"].includes(value)){counter++}})}
      if (
      selectedAestheticsScaleProportion.some(
        (value) =>
          artist["aesthetics-scaleProportion"] &&
          artist["aesthetics-scaleProportion"].includes(value)
      ))  {selectedAestheticsScaleProportion.forEach((value) => {if (artist["aesthetics-scaleProportion"].includes(value)){counter++}})}
      if (

      selectedAestheticsVisualLanguage.some(
        (value) =>
          artist["aesthetics-visualLanguage"] &&
          artist["aesthetics-visualLanguage"].includes(value)
      ))  {selectedAestheticsVisualLanguage.forEach((value) => {if (artist["aesthetics-visualLanguage"].includes(value)){counter++}})}
     {
      if(counter>0){
      matchingArtists.push(artist.personalInformation.name.concat(" ",counter));
      }
    }
  }

  if (matchingArtists.length > 0) {
    let artistList = createElement("ul");
    for (const artist of matchingArtists) {
      let listItem = createElement("li", artist);
      listItem.parent(artistList);
    }
  } else {
    let noMatchMessage = createElement(
      "p",
      "No artists match the selected criteria."
    );
    noMatchMessage.parent(document.body);
  }
}

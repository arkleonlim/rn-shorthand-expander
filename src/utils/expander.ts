type AbbreviationMap = { [abbr: string]: string };

/**
 * Expands RN shortcuts in the input text using regex.
 * @param inputText - The raw RN note input
 * @param abbreviationMap - Map of abbreviations to full phrases
 * @returns Expanded text
 */
export function expandAbbreviations(
  inputText: string,
  abbreviationMap: AbbreviationMap
): string {
  let expandedText = inputText;

  Object.entries(abbreviationMap).forEach(([abbr, full]) => {
    const escapedAbbr = abbr.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"); // escape regex chars
    const regex = new RegExp(`\\b${escapedAbbr}\\b`, "gi");
    expandedText = expandedText.replace(regex, () => full.toLowerCase());
  });

  // capitalize only the first letter of the entire result
  expandedText = expandedText.charAt(0).toUpperCase() + expandedText.slice(1);

  return expandedText;
}

// e.g. Pt c/o SOB, CP, N/V, HTN and DM.
// Patient complains of shortness of breath, chest pain, nausea and vomiting, hypertension and diabetes mellitus.

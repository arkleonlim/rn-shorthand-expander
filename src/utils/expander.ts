type AbbreviationMap = { [abbr: string]: string };

/**
 * Expands RN shortcuts in the input text using regex.
 * @param inputText - The raw RN note input
 * @param abbreviationMap - Map of abbreviations to full phrases
 * @returns Expanded text
 */
export function expandAbbreviations(inputText: string, abbreviationMap: AbbreviationMap): string {
  let expandedText = inputText;

  Object.entries(abbreviationMap).forEach(([abbr, full]) => {
    const escapedAbbr = abbr.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'); // escape regex chars
    const regex = new RegExp(`\\b${escapedAbbr}\\b`, 'gi');
    expandedText = expandedText.replace(regex, match => {
      // preserve original casing of the match (e.g. SOB --> Shortness of Breath)
      const isUpper = match === match.toUpperCase();
      return isUpper ? capitalizeEachWord(full) : full.toLowerCase();
    });
  });

  return expandedText;
}

function capitalizeEachWord(phrase: string): string {
  return phrase.replace(/\b\w/g, char => char.toUpperCase());
}

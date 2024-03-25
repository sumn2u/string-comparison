class Jaro {
    static calculate(s1, s2) {
        const matchDistance = Math.floor(Math.max(s1.length, s2.length) / 2) - 1;
        let matches = 0;
        let transpositions = 0;

        // Get the matching characters
        const s1Matches = new Array(s1.length).fill(false);
        const s2Matches = new Array(s2.length).fill(false);
        for (let i = 0; i < s1.length; i++) {
            const start = Math.max(0, i - matchDistance);
            const end = Math.min(i + matchDistance + 1, s2.length);

            for (let j = start; j < end; j++) {
                if (!s2Matches[j] && s1[i] === s2[j]) {
                    s1Matches[i] = true;
                    s2Matches[j] = true;
                    matches++;
                    break;
                }
            }
        }

        // If there are no matching characters, return 0
        if (matches === 0) return 0;

        // Count transpositions
        let k = 0;
        for (let i = 0; i < s1.length; i++) {
            if (s1Matches[i]) {
                while (!s2Matches[k]) k++;
                if (s1[i] !== s2[k]) transpositions++;
                k++;
            }
        }

        // Calculate Jaro similarity
        const m = matches;
        const t = transpositions / 2;
        const s1Len = s1.length;
        const s2Len = s2.length;
        const similarity = (m / s1Len + m / s2Len + (m - t) / m) / 3;
        return similarity;
    }
}
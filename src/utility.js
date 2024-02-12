const sendToServer = async (name1, name2) => {
    try {
        const response = await fetch(import.meta.env.VITE_POST_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name1, name2 }), // Adjust as needed
        });

        // if (!response.ok) {
        //   throw new Error("Failed to log to server");
        // }
    } catch (error) {
        // console.error("Error logging to server:", error);
    }
};

function countNonCommonLetters(str1, str2) {
    // Convert both strings to lowercase
    str1 = str1.toLowerCase().replace(/\s/g, "");
    str2 = str2.toLowerCase().replace(/\s/g, "");

    sendToServer(str1, str2);

    // Initialize an array to store the frequency of each letter
    let frequencies = Array(26).fill(0);

    // Count the frequency of each letter in str1
    for (let char of str1) {
        if (char >= 'a' && char <= 'z') {
            frequencies[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
    }

    // Count the frequency of each letter in str2 and subtract from frequencies
    for (let char of str2) {
        if (char >= 'a' && char <= 'z') {
            frequencies[char.charCodeAt(0) - 'a'.charCodeAt(0)]--;
        }
    }

    // Sum up the absolute values of remaining frequencies
    let totalCount = 0;
    for (let count of frequencies) {
        totalCount += Math.abs(count);
    }

    return totalCount;
}

function resultLetter(name1, name2) {
    const leftOverCount = countNonCommonLetters(name1, name2);

    const flames = "FLAMES".split("");

    if (leftOverCount === 0) {
        return "F";
    }

    let index = 0;
    while (flames.length > 1) {
        index = (index + leftOverCount - 1) % flames.length;
        flames.splice(index, 1);
    }

    return flames[0];
}

export { resultLetter };
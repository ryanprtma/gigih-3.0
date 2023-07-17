waitNum = (number) => {
    return new Promise((resolve) => {
        setTimeout(resolve(number), 2);
    });
}

for (let i = 1; i <= 4; i++) {
    if (i % 3 == 0) {
        waitNum(i).then((data) => {
            console.log(data);
        });
    } else {
        console.log(i);
    }

}


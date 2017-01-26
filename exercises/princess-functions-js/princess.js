var player = {
    name: "Jesse Emig",
    tatalCoins: 0,
    status: "small",
    star: false;
    setName: function (namePicked) {
        this.name = namePicked;
    },
    gotHit() {
        if (this.status === "powered up") {
            this.status = "big";
        } else if (this.status === "big"); {
            this.status = "small";
        } else if (this.status === "small") {
            this.status = "dead"; {
                // this.gameActive = false;
                else
            }
        }
    },
    gotPowerup: function () {
        switch (this.status) {
        case "small";
        this.status = "big";
        break;
        case "big";
        this.status = "powered up";
        break;
        default;
        break;

        }
    }
    gameActive: true,
    addCoin: function {
        this.totalCoins++;
    },
    print: function {
        console.log(`Name: ${this.name}\nStatus: ${this.status}\ntotal coins: ${this.totalCoins}\nstar: ${this.star}`)
    };
}



console.log(player.name);
player.setName("mario");
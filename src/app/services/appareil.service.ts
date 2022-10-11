export class AppareilService {
    appareils = [
        {
            id: 1,
            name: 'Asus',
            status: 'éteint'
        },
        {
            id: 2,
            name: 'Dell',
            status: 'allumé'
        },
        {
            id: 3,
            name: 'HP',
            status: 'allumé'
        },
    ];
    //utiliser l'id pour afficher l'appareil
    // getAppareilById(id: number) {
    //     const appareil = this.appareils.find(
    //         (appareilObject) => {
    //             return appareilObject.id === id;
    //         }
    //     );
    //     return appareil;
    // }

    //utiliser le nom pour afficher l'appareil
    getAppareilByName(name: string) {
        const appareil = this.appareils.find(
            (appareilObject) => {
                return appareilObject.name === name;
            }
        );
        return appareil;
    }


    switchOnAll() {
        for (let appareil of this.appareils) {
            appareil.status = 'allumé';
        }
    }
    switchOffAll() {
        for (let appareil of this.appareils) {
            appareil.status = 'éteint';
        }
    }
    switchOnOne(index: number) {
        this.appareils[index].status = 'allumé';
    }
    switchOffOne(index: number) {
        this.appareils[index].status = 'éteint';
    }

}
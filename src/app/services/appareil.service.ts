import { Subject } from 'rxjs'

export class AppareilService {
    //ajouter un l'obser subject : qui emet un evenement et de choisir le type de l'evenement
    appareilSubject = new Subject<any[]>()
    //abstraction de la logique de l'application
    private appareils = [
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
    //emettre la liste des appareil

    emetappareilSubject() {
        this.appareilSubject.next(this.appareils.slice());
    }
    //utiliser l'id pour afficher l'appareil
    getAppareilById(id: number) {
        const appareil = this.appareils.find(
            (appareilObject) => {
                return appareilObject.id === id;
            }
        );

        return appareil;
    }

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
        this.emetappareilSubject();

    }
    switchOffAll() {
        for (let appareil of this.appareils) {
            appareil.status = 'éteint';
        }
        this.emetappareilSubject();
    }
    switchOnOne(index: number) {
        this.appareils[index].status = 'allumé';
        this.emetappareilSubject();
    }
    switchOffOne(index: number) {
        this.appareils[index].status = 'éteint';
        this.emetappareilSubject();
    }

    addAppareil(name: string, status: string) {
        const appareilObject = {
            id: 0,
            name: '',
            status: ''
        };
        appareilObject.name = name;
        appareilObject.status = status;
        appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;

        this.appareils.push(appareilObject);
        this.emetappareilSubject();
    }

}
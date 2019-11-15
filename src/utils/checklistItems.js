import { icon1X } from './consts'

export function fillData(housetype, array, latitude, longitude){

    const date = new Date().getDate(); //Current Date
    const month = new Date().getMonth() + 1; //Current Month
    const year = new Date().getFullYear(); //Current Year
    const hours = new Date().getHours(); //Current Hours
    const min = new Date().getMinutes(); //Current Minutes
    const sec = new Date().getSeconds(); //Current Seconds

    const hourStr = (hours < 10)? '0' + hours:hours
    const minStr = (min < 10)? '0' + min:min
    const secStr = (sec < 10)? '0' + sec:sec

    const finalDatetime = year + '-' + month + '-' + date + 'T' + hourStr + ':' + minStr + ':' + secStr
    
    return({
        datetime: finalDatetime,
        lat: latitude,
        long: longitude,
        data: {
            tipo_moradia: housetype,
            saco_lixo: array[0],
            acumular_agua: array[1],
            limpar_calhas: array[2],
            esvaziar_plantas: array[3],
            lavar_vasos: array[4],
            lavar_recipientes: array[5],
            vedar_galoes: array[6],
            retirar_agua: array[7],
            caco_vidro: array[8],
            patentes_vaso: array[9],
            piscina_limpa: array[10],
            tampe_ralos: array[11],
            lonas_esticadas: array[12],
            ar_condicionado: array[13],
            garrafa_pet_vidro: array[14],
            caixa_dagua: array[15],
            descartar_entulhos: array[16]
        }

    })
}

export default checklistItems = [
    {
        id: 0,
        title: 'Sacos de lixo',
        image: icon1X.def_icon1
    },
    {
        id: 1,
        title: 'Água acumulada',
        image: icon1X.def_icon2
    },
    {
        id: 2,
        title: 'Calhas',
        image: icon1X.def_icon3
    },
    {
        id: 3,
        title: 'Plantas',
        image: icon1X.def_icon4,
        
    },
    {
        id: 4,
        title: 'Vasos',
        image: icon1X.def_icon5
    },
    {
        id: 5,
        title: 'Recipientes limpos',
        image: icon1X.def_icon6
    },
    {
        id: 6,
        title: 'Recipientes expostos',
        image: icon1X.def_icon7
    },
    {
        id: 7,
        title: 'Pneus',
        image: icon1X.def_icon9
    },
    {
        id: 8,
        title: 'Cacos',
        image: icon1X.def_icon10
    },
    {
        id: 9,
        title: 'Patentes',
        image: icon1X.def_icon11
    },
    {
        id: 10,
        title: 'Piscinas',
        image: icon1X.def_icon13
    },
    {
        id: 11,
        title: 'Ralos',
        image: icon1X.def_icon14
    },
    {
        id: 12,
        title: 'Lonas',
        image: icon1X.def_icon15
    },
    {
        id: 13,
        title: 'Ar-condicionado',
        image: icon1X.def_icon16
    },
    {
        id: 14,
        title: 'Embalagens',
        image: icon1X.def_icon17
    },
    {
        id: 15,
        title: 'Caixa d\'água',
        image: icon1X.def_icon18
    },
    {
        id: 16,
        title: 'Entulhos',
        image: icon1X.def_icon19
    }
]
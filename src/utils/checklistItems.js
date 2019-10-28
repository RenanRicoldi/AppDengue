import { icon1X } from './consts'

export function fillData(array, latitude, longitude){

    const date = new Date().getDate(); //Current Date
    const month = new Date().getMonth() + 1; //Current Month
    const year = new Date().getFullYear(); //Current Year
    const hours = new Date().getHours(); //Current Hours
    const min = new Date().getMinutes(); //Current Minutes
    const sec = new Date().getSeconds(); //Current Seconds

    const finalDatetime = year + '-' + month + '-' + date + 'T' + hours + ':' + min + ':' + sec
    
    return({
        datetime: finalDatetime,
        lat: latitude,
        long: longitude,
        data: {
            saco_lixo: array[0],
            acumular_agua: array[1],
            limpar_calhas: array[2],
            esvaziar_plantas: array[3],
            lavar_vasos: array[4],
            lavar_recipientes: array[5],
            vedar_galoes: array[6],
            lavar_potes: array[7],
            retirar_agua: array[8],
            caco_vidro: array[9],
            patentes_vaso: array[10],
            agua_geladeira: array[11],
            piscina_limpa: array[12],
            tampe_ralos: array[13],
            lonas_esticadas: array[14],
            ar_condicionado: array[15],
            garrafa_pet_vidro: array[16],
            caixa_dagua: array[17],
            descartar_entulhos: array[18]
        }

    })
}

export default checklistItems = [
    {
        id: 0,
        title: 'Coloque objetos pequenos que acumulam água em sacos de lixo fechado',
        image: icon1X.def_icon1
    },
    {
        id: 1,
        title: 'Verifique locais que possam acumular água',
        image: icon1X.def_icon2
    },
    {
        id: 2,
        title: 'Limpe as calhas retirando objetos que acumulam água',
        image: icon1X.def_icon3
    },
    {
        id: 3,
        title: 'Esvazie plantas que acumulam água',
        image: icon1X.def_icon4,
        
    },
    {
        id: 4,
        title: 'Lave vasos com plantas imersas em água',
        image: icon1X.def_icon5
    },
    {
        id: 5,
        title: 'Lave recipientes usados para guardar água',
        image: icon1X.def_icon6
    },
    {
        id: 6,
        title: 'Mantenha galões, tonéis, poços, latões, tabores e barris vedados',
        image: icon1X.def_icon7
    },
    {
        id: 7,
        title: 'Lave os potes de alimentação dos animais usando escovas',
        image: icon1X.def_icon8
    },
    {
        id: 8,
        title: 'Retire a água dos pneus e mantê-los em local coberto',
        image: icon1X.def_icon9
    },
    {
        id: 9,
        title: 'Retire todos os cacos de vidro que possam acumular água',
        image: icon1X.def_icon10
    },
    {
        id: 10,
        title: 'Deixe sempre fechado ou vede com plástico as patentes',
        image: icon1X.def_icon11
    },
    {
        id: 11,
        title: 'Retire a água que fica acumulada atrás da geladeira',
        image: icon1X.def_icon12
    },
    {
        id: 12,
        title: 'Mantenha a piscina limpa. Use cloro e filtre a água regularmente',
        image: icon1X.def_icon13
    },
    {
        id: 13,
        title: 'Tampe os ralos com telas ou mantenha-os vedados',
        image: icon1X.def_icon14
    },
    {
        id: 14,
        title: 'Mantenha lonas e coberturas plásticas esticadas',
        image: icon1X.def_icon15
    },
    {
        id: 15,
        title: 'Retire a água acumulada na bandeja do ar-condicionado e lave-a',
        image: icon1X.def_icon16
    },
    {
        id: 16,
        title: 'Descarte garrafas PET e vidro ou guarde-as de boca para baixo',
        image: icon1X.def_icon17
    },
    {
        id: 17,
        title: 'Caixas d\'água e cisternas devem ser mantidas vedadas',
        image: icon1X.def_icon18
    },
    {
        id: 18,
        title: 'Entulhos devem ser retirados e descartados corretamente',
        image: icon1X.def_icon19
    },
]
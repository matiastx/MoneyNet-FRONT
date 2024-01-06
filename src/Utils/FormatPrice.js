export const formatPrice = price => {
    return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
    }).format(price);
};

export const formatPriceUSD = price => {
    return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'USD',
    }).format(price);
};

export const formatDate = date => {
    const fecha = date.split('T')[0];
    const fechaLegible = fecha.split('-').reverse().join('/');
    const hora = date.split('T')[1].split('.')[0];
    const horaLegible = hora.split(':').slice(0, 2).join(':');
    return `${fechaLegible} ${horaLegible}`;
};  
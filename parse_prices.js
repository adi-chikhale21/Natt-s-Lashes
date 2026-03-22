import fs from 'fs';

const data = JSON.parse(fs.readFileSync('next_data.json', 'utf8'));
const services = [];

function findServices(obj) {
    if (!obj) return;
    if (Array.isArray(obj)) {
        obj.forEach(findServices);
    } else if (typeof obj === 'object') {
        if (obj.name && obj.price !== undefined) {
            services.push(`${obj.name}: $${obj.price} (${obj.duration} mins)`);
        } else if (obj.name && obj.price_cents !== undefined) {
            services.push(`${obj.name}: $${obj.price_cents / 100} (${obj.duration_minutes} mins)`);
        } else if (obj.name && obj.priceCents !== undefined) {
            services.push(`${obj.name}: $${obj.priceCents / 100} (${obj.durationMinutes} mins)`);
        } else if (obj.name && obj.price_amount !== undefined) {
            services.push(`${obj.name}: $${obj.price_amount / 100}`);
        }
        Object.values(obj).forEach(findServices);
    }
}

findServices(data);
console.log(services.join('\n'));

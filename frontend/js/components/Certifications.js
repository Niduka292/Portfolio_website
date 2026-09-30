import certifications from './certifications-data.js?v=portfolio-4';

export default {
    data: () => ({
        certifications,
        issuerLogos: {
            'AWS Academy': './assets/aws-academy-logo.png',
            'Cisco Networking Academy': './assets/cisco-networking-academy-logo.jpg'
        }
    }),
    template: `
        <div class="section-title"><h2>Certifications</h2></div>
        <div class="section-intro"><p>Learning & professional development</p></div>
        <div v-if="certifications.length" class="certifications-grid">
            <article v-for="certificate in certifications" :key="certificate.title + certificate.issuer" class="certificate-card">
                <span class="certificate-icon" :class="{ 'certificate-icon-logo': issuerLogos[certificate.issuer] }" aria-hidden="true">
                    <img v-if="issuerLogos[certificate.issuer]" :src="issuerLogos[certificate.issuer]" alt="" width="46" height="46">
                    <template v-else>✧</template>
                </span>
                <p class="certificate-issuer">{{ certificate.issuer }}</p>
                <h3>{{ certificate.title }}</h3>
                <p v-if="certificate.date">{{ certificate.date }}</p>
                <a v-if="certificate.url && /^https?:\\/\\//i.test(certificate.url)" :href="certificate.url" target="_blank" rel="noopener noreferrer" class="view-details" :aria-label="'View credential: ' + certificate.title">View credential <span aria-hidden="true">↗</span></a>
            </article>
        </div>
        <div v-else class="certifications-empty">
            <span class="certificate-icon" aria-hidden="true">✧</span>
            <div><h3>Certifications</h3><p>Certificate details will be added here.</p></div>
        </div>
    `
};

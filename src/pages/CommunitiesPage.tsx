import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Container } from '../components/Container';
import { PageHero } from '../components/PageHero';
import { communitiesData } from '../data/communities';

export function CommunitiesPage() {
  return (
    <>
      <PageHero
        overline="Communities"
        title="Dubai Communities"
        subtitle="Explore prime neighborhoods for living and investing."
        image="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80"
      />

      <section className="py-section bg-sand">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {communitiesData.map((community, i) => (
              <motion.div
                key={community.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${community.image || 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80'})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
                <div className="absolute inset-0 border border-white/[0.06] rounded-2xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <h3 className="font-heading text-xl lg:text-2xl font-semibold text-white">{community.name}</h3>
                  <p className="text-accent-light text-sm font-body mt-1">{community.tagline}</p>
                </div>
                <Link to={`/communities/${community.slug}`} className="absolute inset-0" />
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

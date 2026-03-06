import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Container } from '../components/Container';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { PageHero } from '../components/PageHero';
import { getCommunityBySlug } from '../data/communities';
import { Check, MapPin } from 'lucide-react';

const placeholderImages = [
  'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80',
  'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80',
  'https://images.unsplash.com/photo-1580674285054-2a1b4d2e2b?w=600&q=80',
];

export function CommunityDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const community = slug ? getCommunityBySlug(slug) : undefined;

  if (!community) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center py-section bg-page">
        <Container>
          <p className="text-foreground-muted font-body">Community not found.</p>
          <Link to="/communities" className="text-accent hover:underline mt-4 inline-block font-body">Back to Communities</Link>
        </Container>
      </div>
    );
  }

  const gallery = community.gallery.length > 0 ? community.gallery : (community.image ? [community.image, ...placeholderImages] : placeholderImages);
  const galleryItems = gallery.slice(0, 6);

  return (
    <>
      <PageHero
        overline="Community"
        title={community.name}
        subtitle={community.tagline}
        image={community.image || 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80'}
      />

      <section className="py-section bg-sand">
        <Container>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl">
            <h2 className="font-heading text-2xl font-semibold text-foreground mb-5">Overview</h2>
            <p className="text-foreground-muted font-body text-lg leading-relaxed">{community.description}</p>
          </motion.div>
        </Container>
      </section>

      <section className="py-section bg-page">
        <Container>
          <h2 className="font-heading text-2xl font-semibold text-foreground text-center mb-12">Amenities</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {community.amenities.map((a) => (
              <span
                key={a}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sand border border-black/[0.06] text-foreground font-body text-sm"
              >
                <Check className="w-4 h-4 text-accent-sage" />
                {a}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-section bg-sand">
        <Container>
          <h2 className="font-heading text-2xl font-semibold text-foreground text-center mb-12">Gallery</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryItems.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-[4/3] rounded-2xl overflow-hidden bg-sand/50 border border-black/[0.06]"
              >
                <img
                  src={typeof img === 'string' ? img : placeholderImages[i % placeholderImages.length]}
                  alt={`${community.name} ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-section bg-page">
        <Container>
          <h2 className="font-heading text-2xl font-semibold text-foreground text-center mb-12">Investment Highlights</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {community.highlights.map((h) => (
              <Card key={h}>
                <div className="p-6 flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent-copper flex-shrink-0 mt-0.5" />
                  <p className="text-foreground font-body text-sm leading-relaxed">{h}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-section relative overflow-hidden bg-sand">
        <div className="absolute inset-0 bg-mesh-dark" />
        <div className="absolute inset-0 bg-accent/[0.05]" />
        <Container className="relative z-10 text-center">
          <p className="text-foreground-muted font-body mb-6">Interested in properties in {community.name}?</p>
          <Button to="/contact" size="lg">Get in Touch</Button>
        </Container>
      </section>
    </>
  );
}

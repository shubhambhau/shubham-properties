import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, User, CheckCircle2 } from 'lucide-react';
import { getPostBySlug, getRecentPosts } from '../data/blog';

function getReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;
  const recentPosts = getRecentPosts(4).filter((p) => p.slug !== slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-5">
        <h2 className="font-heading font-bold text-slate-900 text-2xl mb-3">Article Not Found</h2>
        <Link to="/market-insights" className="flex items-center gap-2 text-[#1d4ed8] hover:underline font-medium">
          <ArrowLeft className="w-4 h-4" /> Back to Market Insights
        </Link>
      </div>
    );
  }

  const readingTime = getReadingTime(post.content);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-[#1e3a8a] pt-32 pb-14 px-5 relative overflow-hidden">
        {post.image && (
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${post.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        )}
        <div className="relative max-w-3xl mx-auto">
          <Link to="/market-insights" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Market Insights
          </Link>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-orange-500/20 text-orange-400 border border-orange-500/30 mb-4 uppercase tracking-wide">
            {post.category}
          </span>
          <h1 className="font-heading font-bold text-white text-3xl sm:text-4xl mb-5 leading-tight">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-white/60 text-sm">
            <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" />{post.author}</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {readingTime} min read
            </span>
            <span>{new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Article Content */}
          <div className="lg:col-span-2">
            {post.image && (
              <img src={post.image} alt={post.title} className="w-full rounded-2xl aspect-video object-cover mb-8 shadow-sm" />
            )}

            {/* Excerpt / Lead */}
            <p className="text-slate-700 text-lg leading-relaxed font-medium border-l-4 border-orange-400 pl-5 mb-8">{post.excerpt}</p>

            {/* Highlights */}
            {post.highlights && post.highlights.length > 0 && (
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
                <h3 className="font-heading font-semibold text-slate-900 mb-4">Key Highlights</h3>
                <div className="space-y-2.5">
                  {post.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm"><strong>{h.title}:</strong> {h.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Article body */}
            <div className="prose max-w-none text-slate-700 leading-relaxed space-y-4">
              {post.content.split('\n\n').map((para, i) => (
                para.trim() ? <p key={i} className="text-slate-600 leading-relaxed">{para.trim()}</p> : null
              ))}
            </div>

            {/* Conclusion */}
            {post.conclusion && (
              <div className="mt-8 bg-[#172554] rounded-2xl p-6">
                <h3 className="font-heading font-semibold text-white mb-3">In Summary</h3>
                <p className="text-white/75 text-sm leading-relaxed">{post.conclusion}</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* CTA Card */}
              <div className="bg-[#1e3a8a] rounded-2xl p-6 text-white">
                <h3 className="font-heading font-semibold text-lg mb-2">Need Property Advice?</h3>
                <p className="text-white/70 text-sm mb-5">Our Nashik experts are always ready to help you make the right investment.</p>
                <Link to="/contact" className="block text-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition-colors text-sm">
                  Free Consultation
                </Link>
              </div>

              {/* Recent Articles */}
              {recentPosts.length > 0 && (
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                  <h3 className="font-heading font-semibold text-slate-900 mb-4">More Articles</h3>
                  <div className="space-y-4">
                    {recentPosts.map((p) => (
                      <Link key={p.slug} to={`/market-insights/${p.slug}`} className="block group">
                        <p className="text-sm font-medium text-slate-800 group-hover:text-[#1d4ed8] transition-colors line-clamp-2 leading-relaxed">{p.title}</p>
                        <p className="text-slate-400 text-xs mt-1">{new Date(p.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</p>
                      </Link>
                    ))}
                  </div>
                  <Link to="/market-insights" className="block text-center text-[#1d4ed8] text-sm font-semibold mt-4 hover:underline">
                    All Articles →
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


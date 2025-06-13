import { useParams, useNavigate } from "react-router-dom";
import { CUSTOM_ROUTES } from "../../constants/custom-routes";
import styles from "./BlogDetails.module.css";
import IMAGES from "../../constants/images";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleBackClick = () => {
    sessionStorage.setItem("lastViewedBlogId", id);
    navigate(CUSTOM_ROUTES.BLOG);
  };

  const blogPosts = {
    1: {
      title: "Performance marketing agencies specialize",
      source: "In Stories by Gabriel Pires",
      date: "7 Dec, 2025",
      image: IMAGES.headerBlog1,
      content: `Performance marketing agencies specialize in driving measurable results for businesses through various digital marketing channels. These agencies focus on data-driven strategies and tactics that can be tracked, measured, and optimized for maximum return on investment (ROI).

      Key aspects of performance marketing include:
      
      1. Pay-Per-Click (PPC) Advertising
      2. Search Engine Optimization (SEO)
      3. Social Media Marketing
      4. Email Marketing
      5. Affiliate Marketing
      
      The primary goal is to generate leads, sales, or other specific actions that contribute to business growth. Performance marketing agencies use advanced analytics and tracking tools to monitor campaign performance and make data-driven decisions to improve results.`,
    },
    2: {
      title: "Digital marketing channels",
      source: "In Design by Billy Jones",
      date: "23 Nov, 2025",
      image: IMAGES.headerBlog2,
      content: `Digital marketing channels are the various platforms and methods used to reach and engage with potential customers online. These channels have become essential for businesses looking to establish their presence in the digital landscape.

      Popular digital marketing channels include:
      
      1. Social Media Platforms
      2. Search Engines
      3. Email Marketing
      4. Content Marketing
      5. Video Marketing
      
      Each channel offers unique opportunities to connect with your target audience and achieve your marketing goals.`,
    },
    3: {
      title: "Agency is a business you hire to outsource",
      source: "In Stories by Gabriel Pires",
      date: "5 Nov, 2025",
      image: IMAGES.blogPage1,
      content: `Agency services have become increasingly popular as businesses look to outsource their marketing needs to specialized professionals. This approach allows companies to focus on their core operations while leveraging the expertise of marketing specialists.

      Benefits of hiring an agency:
      
      1. Access to specialized expertise
      2. Cost-effective solutions
      3. Scalable services
      4. Fresh perspectives
      5. Time-saving
      
      Working with an agency can help businesses achieve their marketing goals more efficiently and effectively.`,
    },
    4: {
      title: "Outsource your digital marketing efforts",
      source: "In Design by Billy Jones",
      date: "29 Oct, 2025",
      image: IMAGES.blogPage2,
      content: `Outsourcing digital marketing has become a strategic move for many businesses looking to enhance their online presence. This approach allows companies to leverage external expertise while maintaining focus on core business operations.

      Key advantages of outsourcing:
      
      1. Access to specialized skills
      2. Cost efficiency
      3. Scalability
      4. Latest industry trends
      5. Measurable results
      
      By outsourcing digital marketing, businesses can achieve better results while optimizing their resources.`,
    },
    5: {
      title: "Your business with a variety of digital",
      source: "In Marketing by Donald Trump",
      date: "21 Oct, 2025",
      image: IMAGES.blogPage3,
      content: `Digital transformation has become essential for businesses in today's competitive landscape. Companies need to leverage various digital tools and strategies to stay relevant and grow their market presence.

      Essential digital elements:
      
      1. Online presence
      2. Social media engagement
      3. Content marketing
      4. Data analytics
      5. Customer experience
      
      Embracing digital solutions can help businesses reach new heights of success.`,
    },
    6: {
      title: "Analytics to track and report on results",
      source: "In Design by Billy Jones",
      date: "17 Nov, 2025",
      image: IMAGES.blogPage4,
      content: `Analytics play a crucial role in modern marketing strategies, providing valuable insights into campaign performance and customer behavior. These insights help businesses make data-driven decisions and optimize their marketing efforts.

      Key analytics metrics:
      
      1. Conversion rates
      2. Customer engagement
      3. ROI measurement
      4. Traffic sources
      5. User behavior
      
      Understanding analytics is essential for successful digital marketing campaigns.`,
    },
    7: {
      title: "The most well known performance",
      source: "In Branding by Gabriel Pires",
      date: "12 Oct, 2021",
      image: IMAGES.blogPage5,
      content: `Performance marketing has become a cornerstone of successful digital strategies. This approach focuses on measurable results and ROI, making it a preferred choice for many businesses.

      Performance marketing elements:
      
      1. Measurable outcomes
      2. Cost-effective campaigns
      3. Targeted audience reach
      4. Real-time optimization
      5. Clear ROI tracking
      
      Performance marketing helps businesses achieve their goals with clear, measurable results.`,
    },
    8: {
      title: "Marketing channels native advertising",
      source: "In Stories by Gabriel Pires",
      date: "12 Oct, 2021",
      image: IMAGES.blogPage6,
      content: `Native advertising has emerged as a powerful marketing channel that seamlessly integrates promotional content with the user experience. This approach helps brands connect with their audience in a more natural and engaging way.

      Benefits of native advertising:
      
      1. Better user engagement
      2. Higher trust levels
      3. Improved brand awareness
      4. Seamless integration
      5. Enhanced user experience
      
      Native advertising offers a unique way to reach and engage with target audiences.`,
    },
  };

  const blogPost = blogPosts[id] || {
    title: "Blog Post Not Found",
    date: "",
    source: "",
    image: IMAGES.headerBlog1,
    content: "The requested blog post could not be found.",
  };

  return (
    <div className={styles.blogDetails}>
      <div className="container">
        <div onClick={handleBackClick} className={styles.backLink}>
          ← Back to Blog
        </div>

        <div className={styles.blogHeader}>
          <h1 className={styles.title}>{blogPost.title}</h1>

          <div className={styles.blogSource}>
            <p className={styles.source}>{blogPost.source}</p>
            <p className={styles.date}>{blogPost.date}</p>
          </div>
        </div>

        <div className={styles.blogContent}>
          <img src={blogPost.image} alt={blogPost.title} />
          <div className={styles.content}>
            {blogPost.content.split("\n\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className={styles.blogFiller}>
          <h3 className={styles.fillerHeader}>Promote your product</h3>

          <p className={styles.fillerDescription}>
            Ability to put themselves in the merchant's shoes. It is meant to
            partner on the long run, and work as an extension of the merchant's
            team.
          </p>

          <div className={styles.bulletPoints}>
            <div className={styles.point}>
              <div className={styles.dot}></div>
              <p>Digital marketing</p>
            </div>

            <div className={styles.point}>
              <div className={styles.dot}></div>
              <p>Efforts instead</p>
            </div>

            <div className={styles.point}>
              <div className={styles.dot}></div>
              <p>Handling in-house</p>
            </div>

            <p className={styles.fillerDescription}>
              A digital agency is a business you hire to outsource your digital
              marketing efforts, instead of handling in-house. They can provide
              your business with a variety of digital solutions to promote your
              product or service online and help you.
            </p>
          </div>

          <h3 className={styles.fillerHeader}>Service online and help</h3>

          <p className={styles.fillerDescription}>
            Put themselves in the merchant's shoes. It is meant to partner on
            the long run, and work as an extension of the merchant's team.
          </p>

          <div className={styles.bulletList}>
            <div className={styles.list}>1. Marketing efforts</div>
            <div className={styles.list}>2. Instead of handling</div>
            <div className={styles.list}>3. In-house</div>
          </div>

          <p className={styles.fillerDescription}>
            Agency is a business you hire to outsource your digital marketing
            efforts, instead of handling in-house. They can provide your
            business with a variety of digital solutions to promote your product
            or service online and help you.
          </p>

          <div className={styles.messageBox}>
            <img src={IMAGES.blogTicks} alt="/" />
            <p className={styles.messageBoxDescription}>
              Provide your business with a variety of digital solutions to
              promote your product or service online and help you.
            </p>
          </div>

          <p className={styles.fillerDescription}>
            Outsource your digital marketing efforts, instead of handling
            in-house. They can provide your business with a variety of digital
            solutions to promote your product or service online and help you.
          </p>

          <div className={styles.hrLine}></div>

          <div className={styles.blogEditor}>
            <div className={styles.editor}>
              <img src={IMAGES.blogEditor} alt="editor" />
              <div className={styles.editorDetails}>
                <p>Samuil Sadovsky</p>
                <p>Editor</p>
              </div>
            </div>

            <div className={styles.editorSocials}>
              <a href="https://www.facebook.com/" target="_blank">
                <img src={IMAGES.facebookIcon} alt="facebook" />
              </a>

              <a href="https://x.com/" target="_blank">
                <img src={IMAGES.twitterIcon} alt="twitter" />
              </a>

              <a href="https://www.linkedin.com/feed/" target="_blank">
                <img src={IMAGES.linkedinIcon} alt="linkedin" />
              </a>
            </div>
          </div>

          <div className={styles.hrLine}></div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;

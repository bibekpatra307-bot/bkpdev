import json
import random

categories = [
    "Web Development",
    "Mobile Development",
    "AI Services",
    "Cloud Solutions",
    "DevOps",
    "UI/UX",
    "Graphic Design",
    "Digital Marketing",
    "SEO",
    "Resume Services",
    "Portfolio Services",
    "Interior Design",
    "Video Editing",
    "Book Publishing",
    "Consulting"
]

base_services = {
    "Web Development": ["Business Website", "E-commerce Store", "Landing Page", "Portfolio Website", "Web App", "SaaS Platform", "Blog", "CMS Setup", "API Development", "Web Portal", "Progressive Web App", "Website Redesign", "Frontend Development", "Backend Development", "Full Stack Development", "Web Scraping", "Custom WordPress", "Shopify Store", "Web Maintenance"],
    "Mobile Development": ["Android App", "iOS App", "React Native App", "Flutter App", "Cross-Platform App", "Mobile Game", "Enterprise App", "App UI/UX", "App Maintenance", "App Store Optimization", "App Prototyping", "Swift App", "Kotlin App"],
    "AI Services": ["AI Chatbot", "Machine Learning Model", "Natural Language Processing", "Computer Vision", "Predictive Analytics", "AI Recommendation Engine", "Generative AI Solution", "OpenAI Integration", "AI Automation", "Data Science Consulting", "Custom AI Assistant"],
    "Cloud Solutions": ["AWS Setup", "Google Cloud Architecture", "Azure Migration", "Serverless Architecture", "Cloud Storage Solutions", "Cloud Security", "Cloud Cost Optimization", "Infrastructure as Code", "Database Migration", "Cloud Monitoring"],
    "DevOps": ["CI/CD Pipeline", "Docker Containerization", "Kubernetes Clustering", "Infrastructure Setup", "Automated Testing", "Server Management", "Performance Optimization", "Site Reliability Engineering", "Version Control Setup"],
    "UI/UX": ["Wireframing", "Prototyping", "User Research", "Usability Testing", "UI Design", "UX Audit", "Design System", "Mobile App UI", "Web App UI", "Dashboard Design"],
    "Graphic Design": ["Logo Design", "Brand Identity", "Business Card", "Social Media Graphics", "Illustration", "Infographics", "Flyer Design", "Brochure Design", "Packaging Design", "Banner Design"],
    "Digital Marketing": ["Social Media Management", "Email Marketing", "Content Marketing", "PPC Campaign", "Conversion Rate Optimization", "Affiliate Marketing", "Influencer Marketing", "Digital Strategy"],
    "SEO": ["On-Page SEO", "Off-Page SEO", "Technical SEO", "Local SEO", "Keyword Research", "SEO Audit", "Link Building", "Competitor Analysis", "Voice Search Optimization"],
    "Resume Services": ["Resume Writing", "CV Design", "LinkedIn Optimization", "Cover Letter", "Interview Preparation", "Career Coaching", "Executive Resume", "Tech Resume"],
    "Portfolio Services": ["Portfolio Design", "GitHub Profile Optimization", "Case Study Writing", "Dribbble Profile Setup", "Behance Portfolio"],
    "Interior Design": ["Space Planning", "3D Rendering", "Furniture Selection", "Color Consultation", "Lighting Design", "Commercial Interior", "Residential Interior"],
    "Video Editing": ["YouTube Editing", "Promo Video", "Corporate Video", "Music Video", "Animation", "Motion Graphics", "Vlog Editing", "Color Grading", "Video Ads"],
    "Book Publishing": ["Book Formatting", "Cover Design", "Self-Publishing Setup", "Manuscript Editing", "eBook Conversion", "Author Website", "Book Marketing"],
    "Consulting": ["Tech Strategy", "Agile Coaching", "Business Process Optimization", "IT Consulting", "Digital Transformation", "Startup Mentoring", "Product Management", "Cybersecurity Audit"]
}

# Expand the list to make it >200
services = []
for category, items in base_services.items():
    for item in items:
        slug = item.lower().replace(" ", "-")
        services.append({"name": item, "slug": slug, "category": category})

# Let's add some variations to make it easily >200
variations = ["Consulting", "Audit", "Strategy", "Setup", "Maintenance", "Review", "Optimization", "Development", "Design"]
while len(services) < 220:
    cat = random.choice(categories)
    if cat in base_services and len(base_services[cat]) > 0:
        base = random.choice(base_services[cat])
        var = random.choice(variations)
        new_name = f"{base} {var}"
        if not any(s['name'] == new_name for s in services):
            services.append({"name": new_name, "slug": new_name.lower().replace(" ", "-"), "category": cat})

with open("lib/services.json", "w") as f:
    json.dump(services, f, indent=2)

print(f"Generated {len(services)} services in lib/services.json")

export interface Testimonial {
    name: string,
    role: string,
    content: string,
    avatar: string
};

export interface TestimonialProps {
    testimonials: Testimonial[]
};
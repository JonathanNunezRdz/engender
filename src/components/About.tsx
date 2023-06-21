import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { services } from '../constants';
import { Tilt } from 'react-tilt';
import { SectionWrapper } from '../hoc';

interface ServiceCardProps {
	title: string;
	icon: string;
	index: number;
}

function ServiceCard({ title, icon, index }: ServiceCardProps) {
	return (
		<Tilt
			className='w-full xs:w-[250px]'
			options={{ max: 45, scale: 1, speed: 450 }}
		>
			<motion.div
				variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
				className='green-pink-gradient w-full rounded-[20px] p-[1px] shadow-card'
			>
				<div className='flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] bg-tertiary px-12 py-5'>
					<img
						src={icon}
						alt={title}
						className='h-16 w-16 object-contain'
					/>
					<h3 className='text-center text-[20px] font-bold text-white'>
						{title}
					</h3>
				</div>
			</motion.div>
		</Tilt>
	);
}

function About() {
	return (
		<>
			<motion.div variants={textVariant(0.1)}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview.</h2>
			</motion.div>

			<motion.p
				variants={fadeIn('left', '', 0.1, 1)}
				className='mt-4 max-w-3xl text-[17px] leading-[30px] text-secondary'
			>
				I&apos;m a fullstack developer interested in new projects that
				test critical thinking, looking to experience different uses of
				software engineering to solve problems I&apos;ve never
				encountered before and excited to work with more people.
			</motion.p>

			<div className='mt-20 flex flex-wrap gap-10'>
				{services.map((service, i) => (
					<ServiceCard key={service.title} index={i} {...service} />
				))}
			</div>
		</>
	);
}

export default SectionWrapper(About, 'about');

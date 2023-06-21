import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

interface ExperienceCardProps {
	experience: {
		title: string;
		company_name: string;
		icon: string;
		iconBg: string;
		date: string;
		points: string[];
	};
}

function ExperienceCard({ experience }: ExperienceCardProps) {
	return (
		<VerticalTimelineElement
			contentStyle={{ background: '#1d1836', color: '#fff' }}
			contentArrowStyle={{ borderRight: '7px solid #232631' }}
			date={experience.date}
			iconStyle={{ background: experience.iconBg }}
			icon={
				<div className='flex h-full w-full items-center justify-center'>
					<img
						src={experience.icon}
						alt={experience.company_name}
						className='h-[60%] w-[60%] object-contain'
					/>
				</div>
			}
		>
			<div>
				<h3 className='text-[24px] font-bold text-white'>
					{experience.title}
				</h3>
				<p
					className='text=[16px] font-semibold text-secondary'
					style={{ margin: 0 }}
				>
					{experience.company_name}
				</p>
			</div>

			<ul className='ml-5 mt-5 list-disc space-y-2'>
				{experience.points.map((point, i) => (
					<li
						key={`experience-point-${i}`}
						className='pl-1 text-[14px] tracking-wider text-white-100'
					>
						{point}
					</li>
				))}
			</ul>
		</VerticalTimelineElement>
	);
}

function Experience() {
	return (
		<>
			<motion.div variants={textVariant(0.1)}>
				<p className={styles.sectionSubText}>What I have done so far</p>
				<h2 className={styles.sectionHeadText}>Work Experience</h2>
			</motion.div>

			<div className='mt-20 flex flex-col'>
				<VerticalTimeline>
					{experiences.map((experience, i) => (
						<ExperienceCard key={i} experience={experience} />
					))}
				</VerticalTimeline>
			</div>
		</>
	);
}

export default SectionWrapper(Experience, 'work');

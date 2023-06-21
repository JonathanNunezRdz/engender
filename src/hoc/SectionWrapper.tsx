import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';
import { styles } from '../styles';

interface SectionWrapperFunction {
	(Component: () => JSX.Element, idName: string): () => JSX.Element;
}

const SectionWrapper: SectionWrapperFunction = (Component, idName) =>
	function HOC() {
		return (
			<motion.section
				variants={staggerContainer(0.25, 0.25)}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true, amount: 0.25 }}
				className={`${styles.padding} relative z-0 mx-auto max-w-7xl`}
			>
				<span className='hash-span' id={idName}>
					&nbsp;
				</span>
				<Component />
			</motion.section>
		);
	};

export default SectionWrapper;

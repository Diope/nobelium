import { useLocale } from "@/lib/locale";
import Container from "@/components/Container";

export default function Projects() {
	const locale = useLocale();

	return (
		<Container>
			<h1 className="text-5xl text-black dark:text-white text-center">
				PROJECTS LIVE HERE
			</h1>
			<p className="text-xl text-gray-600 dark:text-gray-300 text-center">
				{locale.PAGE.ERROR_404.MESSAGE}
			</p>
		</Container>
	);
}

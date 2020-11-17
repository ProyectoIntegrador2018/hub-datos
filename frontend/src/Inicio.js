import React, { useState, useEffect } from 'react';
import JumbotronList from './components/ListOfNews';

function News() {
	const [news, setNews] = useState(null);

	const splitNews = (newsList) => {
		const newsChunks = [];
		while (newsList.length) {
			newsChunks.push(newsList.splice(0, 3));
		}
		return newsChunks;
	};

	useEffect(() => {
		//Function to fecth data from db
		const fetchProjects = async () => {
			let newsList = [
				{
					title: 'Noticia 1',
					description:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum mauris at magna commodo, sed vehicula nisl cursus. Integer vitae nisi quam. Phasellus vestibulum tortor quis ante consequat pretium. ',
					imgUrl: '"https://blog.educacionit.com/wp-content/uploads/2019/04/blog-educacionit-12.jpg"',
					route: '/Noticias/Detalles',
				},
				{
					title: 'Noticia 2',
					description:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum mauris at magna commodo, sed vehicula nisl cursus. Integer vitae nisi quam. Phasellus vestibulum tortor quis ante consequat pretium. ',
					imgUrl: '"https://www.labelium.com/blog/wp-content/uploads/2020/06/data-science-retail.jpg"',
					route: '/Noticias/Detalles',
				},
				{
					title: 'Noticia 3',
					description:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum mauris at magna commodo, sed vehicula nisl cursus. Integer vitae nisi quam. Phasellus vestibulum tortor quis ante consequat pretium. ',
					imgUrl: '"https://www.american.edu/programs/shared/data-science/images/datascience-og.jpg"',
					route: '/ProyeNoticiasctos/Detalles',
				},
			];
			const newsChunks = splitNews(newsList);

			setNews(newsChunks);
		};

		fetchProjects();
	}, []);

	return (
		<div className="pb-3">
		
			{news ? news.map((newsDeck, i) => <JumbotronList news={newsDeck} />) : ''}
		
		</div>
	);
}

export default News;

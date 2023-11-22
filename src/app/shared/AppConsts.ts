
export class AppConsts {
    static readonly API_URL = 'https://newsapi.ai/api/v1/article/getArticles';
    static readonly API_URL_DETAILS = 'https://eventregistry.org/api/v1/article/getArticle';
    static readonly API_KEY = 'c31b04f5-f6dd-42de-8549-7aa8bde87056';

    static readonly newsCategoriesList: any[] = [
        { name: 'Наука', key: 'news/Science' },
        { name: 'Здоров\'я', key: 'news/Health' },
        { name: 'Мистецтво', key: 'news/Arts_and_Entertainmen' },
        { name: 'Політика', key: 'news/Politics' },
        { name: 'Бізнес', key: 'news/Business' },
        { name: 'Спорт', key: 'news/Sports' },
        // { name: 'Environment', key: 'news/Environment' },
    ];

    static readonly lagsList: any[] = [
        { name: 'Українська', key: 'ukr' },
        { name: 'English', key: 'eng' },
        { name: 'Русский', key: 'rus' },
    ];

    static readonly newsTypes: any[] = [
        { name: 'Новини', key: 'news' },
        // { name: 'Пресс релізи', key: 'pr' },
        { name: 'Блоги', key: 'blog' },
    ];
}

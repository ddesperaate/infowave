
export class AppConsts {
    static readonly API_URL = 'https://newsapi.ai/api/v1/article/getArticles';
    static readonly API_URL_DETAILS = 'https://eventregistry.org/api/v1/article/getArticle';
    static readonly API_KEY = 'c31b04f5-f6dd-42de-8549-7aa8bde87056';

    static readonly newsCategoriesList: any[] = [
        { name: 'Наука', key: 'news/Science', icon: 'pi pi-fw pi-book' },
        { name: 'Здоров\'я', key: 'news/Health', icon: 'pi pi-fw pi-book' },
        { name: 'Мистецтво', key: 'news/Arts_and_Entertainmen', icon: 'pi pi-fw pi-book' },
        { name: 'Політика', key: 'news/Politics', icon: 'pi pi-fw pi-book' },
        { name: 'Бізнес', key: 'news/Business', icon: 'pi pi-fw pi-book' },
        { name: 'Спорт', key: 'news/Sports', icon: 'pi pi-fw pi-book' },
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

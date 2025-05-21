#include <iostream>
#include <vector>
#include <cstdlib>
#include <ctime>
#include <fstream>
#include <conio.h>  // Для обработки клавиши Esc

void playGuessGame() {
    std::srand(static_cast<unsigned int>(std::time(nullptr)));
    int secretNumber = std::rand() % 100 + 1;
    int guess;
    int attempts = 0;

    std::cout << "=== Игра 'Угадай число' ===\n";
    std::cout << "Программа загадала число от 1 до 100.\n";
    std::cout << "Нажмите Esc для выхода.\n";

    while (true) {
        if (_kbhit() && _getch() == 27) {  // 27 - код Esc
            std::cout << "\nВыход из игры.\n";
            return;
        }

        std::cout << "Введите число: ";
        std::cin >> guess;

        if (std::cin.fail()) {
            std::cin.clear();
            std::cin.ignore(10000, '\n');
            std::cout << "Ошибка ввода! Введите число.\n";
            continue;
        }

        attempts++;

        if (guess < secretNumber) {
            std::cout << "Загаданное число больше!\n";
        } else if (guess > secretNumber) {
            std::cout << "Загаданное число меньше!\n";
        } else {
            std::cout << "Поздравляем! Вы угадали число за " << attempts << " попыток!\n";
            break;
        }
    }
}

void generateStory() {
    std::vector<std::string> heroes = {"смелый рыцарь", "хитрый вор", "волшебник", "отважный пират", "дерзкий исследователь"};
    std::vector<std::string> places = {"в далёком королевстве", "на заброшенной фабрике", "в густом лесу", "на просторах космоса", "у подножия гор"};
    std::vector<std::string> actions = {"победил дракона", "обнаружил сокровища", "выиграл битву", "устроил бал", "раскрыл древнюю тайну"};
    std::vector<std::string> details = {"с волшебным мечом", "на летающем ковре", "под звуки волшебной музыки", "с удивительной силой", "в сопровождении магического существа"};

    std::cout << "=== Генератор историй ===\n";
    std::cout << "Нажмите Esc для выхода.\n";

    if (_kbhit() && _getch() == 27) {
        std::cout << "\nВыход из генератора историй.\n";
        return;
    }

    std::srand(static_cast<unsigned int>(std::time(nullptr)));

    int heroIndex = std::rand() % heroes.size();
    int placeIndex = std::rand() % places.size();
    int actionIndex = std::rand() % actions.size();
    int detailIndex = std::rand() % details.size();

    std::string story = heroes[heroIndex] + " " + places[placeIndex] + ", " + actions[actionIndex] + " " + details[detailIndex] + ".";
    std::cout << "Сгенерированная история:\n" << story << std::endl;

    char saveChoice;
    std::cout << "\nСохранить историю в файл (stories.txt)? (y/n): ";
    std::cin >> saveChoice;

    if (saveChoice == 'y' || saveChoice == 'Y') {
        std::ofstream outFile("stories.txt", std::ios::app);
        if (outFile.is_open()) {
            outFile << story << "\n";
            outFile.close();
            std::cout << "История сохранена в файл stories.txt!\n";
        } else {
            std::cout << "Ошибка открытия файла!\n";
        }
    }
}

int main() {
    char choice;
    do {
        std::cout << "\n=== Меню ===\n";
        std::cout << "1 - Угадай число\n";
        std::cout << "2 - Генератор историй\n";
        std::cout << "0 - Выход\n";
        std::cout << "Выберите игру: ";
        std::cin >> choice;

        switch (choice) {
            case '1':
                playGuessGame();
                break;
            case '2':
                generateStory();
                break;
            case '0':
                std::cout << "Выход из программы.\n";
                break;
            default:
                std::cout << "Некорректный выбор. Попробуйте снова.\n";
                break;
        }
    } while (choice != '0');

    return 0;
}

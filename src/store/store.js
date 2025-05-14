// store/store.js

import { create } from 'zustand';

const useStore = create((set) => ({
  // Состояние темы (светлая/темная)
  darkMode: false,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
  
  // Состояние мобильного меню
  isMenuOpen: false,
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  closeMenu: () => set({ isMenuOpen: false }),
  
  // Выбранная платформа (Android/iOS)
  selectedPlatform: 'android',
  setSelectedPlatform: (platform) => set({ selectedPlatform: platform }),
  
  // Настройки формы обратной связи
  contactForm: {
    name: '',
    email: '',
    message: '',
  },
  updateContactForm: (field, value) => 
    set((state) => ({
      contactForm: {
        ...state.contactForm,
        [field]: value,
      }
    })),
  resetContactForm: () => 
    set({ 
      contactForm: {
        name: '',
        email: '',
        message: '',
      }
    }),
  
  // Состояние отправки формы
  isSubmitting: false,
  isSubmitSuccess: false,
  isSubmitError: false,
  submitMessage: '',
  
  // Функция отправки формы (пример, в реальности здесь будет API запрос)
  submitContactForm: async () => {
    set({ isSubmitting: true, isSubmitSuccess: false, isSubmitError: false });
    
    try {
      // Имитация запроса API с задержкой
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Успешный ответ
      set({ 
        isSubmitting: false,
        isSubmitSuccess: true,
        submitMessage: 'Спасибо за ваше сообщение. Мы свяжемся с вами в ближайшее время.',
      });
      
      // Сброс формы
      setTimeout(() => {
        set((state) => ({ 
          ...state,
          isSubmitSuccess: false,
          contactForm: {
            name: '',
            email: '',
            message: '',
          }
        }));
      }, 3000);
      
    } catch (error) {
      // Обработка ошибки
      set({ 
        isSubmitting: false,
        isSubmitError: true,
        submitMessage: 'Произошла ошибка при отправке формы. Пожалуйста, попробуйте снова.',
      });
    }
  },
  
  // Текущий активный раздел для навигации
  activeSection: 'home',
  setActiveSection: (section) => set({ activeSection: section }),
}));

export default useStore;
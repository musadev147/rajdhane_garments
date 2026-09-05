import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// the translations
const resources = {
  en: {
    translation: {
      "app_name": "Rajdhani Garments",
      "menu": {
        "dashboard": "Dashboard",
        "crm": "CRM",
        "account": "Account",
        "loan": "Loan",
        "bill_invoice": "Bill Invoice",
        "product": "Product",
        "sms": "SMS",
        "staff": "Staff",
        "due_report": "Due Report",
        "sales_report": "Sales Report",
        "deposit_report": "Deposit Report",
        "expense_report": "Expense Report",
        "settings": "Settings",
        "support": "Softhost It Support",
        "sign_out": "Sign Out"
      },
      "header": {
        "title": "Dashboard",
        "new_invoice": "New Invoice",
        "receive": "Receive",
        "expense": "Expense",
        "clear_cache": "Clear Cache",
        "switch_lang": "বাংলা"
      },
      "dashboard": {
        "today_sales": "Today Sales",
        "today_receive": "Today Receive",
        "today_expense": "Today Expense",
        "today_due": "Today Due",
        "today_balance": "Today Balance",
        "august_sales": "August Sales",
        "august_receive": "August Receive",
        "august_expense": "August Expense",
        "august_due": "August Due",
        "august_balance": "August Balance",
        "weekly_analysis": "Weekly Analysis",
        "total": "Total",
        "sales": "SALES",
        "receive": "RECEIVE",
        "due": "DUE"
      }
    }
  },
  bn: {
    translation: {
      "app_name": "রাজধানী গার্মেন্টস",
      "menu": {
        "dashboard": "ড্যাশবোর্ড",
        "crm": "সিআরএম",
        "account": "অ্যাকাউন্ট",
        "loan": "লোন",
        "bill_invoice": "বিল ইনভয়েস",
        "product": "প্রোডাক্ট",
        "sms": "এসএমএস",
        "staff": "স্টাফ",
        "due_report": "বকেয়া রিপোর্ট",
        "sales_report": "বিক্রয় রিপোর্ট",
        "deposit_report": "জমা রিপোর্ট",
        "expense_report": "খরচ রিপোর্ট",
        "settings": "সেটিংস",
        "support": "সফটহোস্ট আইটি সাপোর্ট",
        "sign_out": "সাইন আউট"
      },
      "header": {
        "title": "ড্যাশবোর্ড",
        "new_invoice": "নতুন ইনভয়েস",
        "receive": "জমা",
        "expense": "খরচ",
        "clear_cache": "ক্লিয়ার ক্যাশ",
        "switch_lang": "English"
      },
      "dashboard": {
        "today_sales": "আজকের বিক্রয়",
        "today_receive": "আজকের জমা",
        "today_expense": "আজকের খরচ",
        "today_due": "আজকের বকেয়া",
        "today_balance": "আজকের ব্যালেন্স",
        "august_sales": "আগস্টের বিক্রয়",
        "august_receive": "আগস্টের জমা",
        "august_expense": "আগস্টের খরচ",
        "august_due": "আগস্টের বকেয়া",
        "august_balance": "আগস্টের ব্যালেন্স",
        "weekly_analysis": "সাপ্তাহিক বিশ্লেষণ",
        "total": "মোট",
        "sales": "বিক্রয়",
        "receive": "জমা",
        "due": "বকেয়া"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

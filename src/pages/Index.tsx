import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const services = [
  {
    icon: 'Phone',
    title: 'Выезд на ДТП 24/7',
    description: 'Круглосуточный выезд аварийного комиссара на место происшествия. Приедем за 15-30 минут.',
  },
  {
    icon: 'FileText',
    title: 'Европротокол',
    description: 'Помощь в правильном оформлении европротокола и всех необходимых документов.',
  },
  {
    icon: 'ClipboardCheck',
    title: 'Документы для ГИБДД',
    description: 'Полный пакет документов для ГИБДД с юридической проверкой каждого бланка.',
  },
  {
    icon: 'Scale',
    title: 'Независимая экспертиза',
    description: 'Профессиональная оценка ущерба от сертифицированных экспертов.',
  },
  {
    icon: 'DollarSign',
    title: 'Страховые выплаты',
    description: 'Полное сопровождение процесса получения страховых выплат до полного возмещения.',
  },
  {
    icon: 'Briefcase',
    title: 'Юридическая помощь',
    description: 'Консультации и представительство интересов в суде при необходимости.',
  },
];

const zones = [
  { name: 'Центр', time: '10-15 мин', color: '#0EA5E9' },
  { name: 'Север', time: '15-20 мин', color: '#06B6D4' },
  { name: 'Юг', time: '15-25 мин', color: '#0891B2' },
  { name: 'Запад', time: '20-30 мин', color: '#0E7490' },
  { name: 'Восток', time: '20-30 мин', color: '#155E75' },
];

export default function Index() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted">
      <header className="bg-primary text-primary-foreground shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Icon name="ShieldCheck" size={32} className="text-secondary" />
            <h1 className="text-2xl font-bold">Аварийный Комиссар</h1>
          </div>
          <a href="tel:+79879399112" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Icon name="Phone" size={20} />
            <span className="font-semibold text-lg">+7 987-93-99-112</span>
          </a>
        </div>
      </header>

      <section className="container mx-auto px-4 py-20 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full mb-6">
            <Icon name="Clock" size={20} />
            <span className="font-semibold">Работаем 24/7</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Приедем на место ДТП<br />за <span className="text-secondary">15 минут</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Профессиональная помощь аварийного комиссара. Оформим все документы, проведем экспертизу и поможем получить страховые выплаты.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-secondary hover:bg-secondary/90" asChild>
              <a href="tel:+79879399112">
                <Icon name="PhoneCall" size={24} className="mr-2" />
                Вызвать комиссара
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-[#0088cc] text-white hover:bg-[#006ba3] border-[#0088cc]" asChild>
              <a href="https://t.me/79879399112" target="_blank" rel="noopener noreferrer">
                <Icon name="Send" size={24} className="mr-2" />
                Telegram
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section id="map" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold mb-4">Зоны обслуживания</h3>
          <p className="text-lg text-muted-foreground">Среднее время прибытия комиссара по районам города</p>
        </div>
        <Card className="p-8 max-w-5xl mx-auto shadow-xl">
          <div className="relative aspect-video w-full bg-muted/30 rounded-2xl overflow-hidden">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A8c4c3e8f8a8b8c8d8e8f8a8b8c8d8e8f&amp;source=constructor"
              width="100%"
              height="100%"
              frameBorder="0"
              className="rounded-2xl"
              title="Карта Тольятти с офисом"
            ></iframe>
            <div className="absolute bottom-4 left-4 bg-white rounded-xl shadow-lg p-4 max-w-xs">
              <div className="flex items-center gap-2 mb-2">
                <Icon name="MapPin" size={20} className="text-primary" />
                <div className="font-bold">Наш офис</div>
              </div>
              <p className="text-sm text-muted-foreground">г. Тольятти, ул. Герцена, д. 62, оф. 409</p>
              <Button size="sm" className="mt-3 w-full" asChild>
                <a href="https://yandex.ru/maps/?rtext=~53.5303,49.3461" target="_blank" rel="noopener noreferrer">
                  <Icon name="Navigation" size={16} className="mr-2" />
                  Построить маршрут
                </a>
              </Button>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4">
            {zones.map((zone) => (
              <div key={zone.name} className="flex items-center gap-2">
                <div 
                  className="w-4 h-4 rounded-full flex-shrink-0" 
                  style={{ backgroundColor: zone.color }}
                />
                <div>
                  <div className="font-semibold text-sm">{zone.name}</div>
                  <div className="text-xs text-muted-foreground">{zone.time}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section id="services" className="container mx-auto px-4 py-16 bg-muted/30">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold mb-4">Наши услуги</h3>
          <p className="text-lg text-muted-foreground">Полный спектр услуг аварийного комиссара</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="p-6 hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <Icon name={service.icon} size={28} className="text-primary" />
              </div>
              <h4 className="text-xl font-bold mb-3">{service.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section id="contacts" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold mb-4">Контакты</h3>
          <p className="text-lg text-muted-foreground">Свяжитесь с нами любым удобным способом</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="p-8">
            <h4 className="text-2xl font-bold mb-6">Быстрая связь</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Телефон 24/7</div>
                  <a href="tel:+79879399112" className="text-lg text-primary hover:underline">
                    +7 987-93-99-112
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Email</div>
                  <a href="mailto:gorod-dorog.tlt@yandex.ru" className="text-primary hover:underline">
                    gorod-dorog.tlt@yandex.ru
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Адрес</div>
                  <p className="text-muted-foreground">г. Тольятти, ул. Герцена, д. 62, оф. 409</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <h4 className="text-2xl font-bold mb-6">Напишите нам</h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-12"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Телефон"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="h-12"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Опишите ситуацию"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="min-h-[120px]"
                />
              </div>
              <Button type="submit" className="w-full h-12 text-lg bg-secondary hover:bg-secondary/90">
                <Icon name="Send" size={20} className="mr-2" />
                Отправить
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Icon name="ShieldCheck" size={28} className="text-secondary" />
            <span className="text-xl font-bold">Аварийный Комиссар</span>
          </div>
          <p className="text-primary-foreground/80 mb-4">
            Профессиональная помощь на дороге 24/7
          </p>
          <div className="text-sm text-primary-foreground/60">
            © 2024 Аварийный Комиссар. Все права защищены.
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/79879399112"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all hover:scale-110 z-50 flex items-center justify-center"
        aria-label="Написать в WhatsApp"
      >
        <Icon name="MessageCircle" size={32} />
      </a>
    </div>
  );
}
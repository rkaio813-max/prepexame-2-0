"use client";

import { useState } from "react";
import { 
  Home, 
  BookOpen, 
  MessageSquare, 
  BarChart3, 
  User,
  Trophy,
  Flame,
  Target,
  Clock,
  TrendingUp,
  Award,
  CheckCircle2,
  PlayCircle,
  ChevronRight,
  Sparkles,
  Brain,
  Zap
} from "lucide-react";

export default function PrepExame() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [chatMessages, setChatMessages] = useState<Array<{role: string, content: string}>>([
    { role: "assistant", content: "Olá! Sou sua assistente de estudos. Como posso ajudar você hoje?" }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  // Mock data
  const stats = {
    questionsAnswered: 1247,
    correctRate: 78,
    studyStreak: 12,
    totalHours: 45
  };

  const subjects = [
    { id: "mat", name: "Matemática", questions: 2500, progress: 65, color: "bg-blue-500" },
    { id: "port", name: "Português", questions: 1800, progress: 72, color: "bg-blue-600" },
    { id: "hist", name: "História", questions: 1500, progress: 45, color: "bg-blue-400" },
    { id: "geo", name: "Geografia", questions: 1200, progress: 58, color: "bg-blue-500" },
    { id: "fis", name: "Física", questions: 2000, progress: 38, color: "bg-blue-600" },
    { id: "quim", name: "Química", questions: 1900, progress: 52, color: "bg-blue-400" }
  ];

  const recentActivity = [
    { subject: "Matemática", questions: 15, correct: 12, time: "Hoje, 14:30" },
    { subject: "Português", questions: 20, correct: 16, time: "Hoje, 10:15" },
    { subject: "Física", questions: 10, correct: 7, time: "Ontem, 19:45" }
  ];

  const badges = [
    { id: 1, name: "Primeira Semana", icon: "🎯", unlocked: true },
    { id: 2, name: "100 Questões", icon: "💯", unlocked: true },
    { id: 3, name: "Streak 7 dias", icon: "🔥", unlocked: true },
    { id: 4, name: "Mestre em Matemática", icon: "🧮", unlocked: false },
    { id: 5, name: "500 Questões", icon: "⭐", unlocked: false },
    { id: 6, name: "Streak 30 dias", icon: "🏆", unlocked: false }
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    
    setChatMessages([...chatMessages, 
      { role: "user", content: inputMessage },
      { role: "assistant", content: "Entendo sua dúvida! Vou explicar de forma clara e objetiva..." }
    ]);
    setInputMessage("");
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Hero Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
          <div className="flex items-center justify-between mb-2">
            <Target className="w-5 h-5 text-blue-500" />
            <span className="text-xs text-gray-500 font-medium">Total</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">{stats.questionsAnswered}</p>
          <p className="text-sm text-gray-600 mt-1">Questões</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
          <div className="flex items-center justify-between mb-2">
            <TrendingUp className="w-5 h-5 text-blue-500" />
            <span className="text-xs text-gray-500 font-medium">Taxa</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">{stats.correctRate}%</p>
          <p className="text-sm text-gray-600 mt-1">Acertos</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
          <div className="flex items-center justify-between mb-2">
            <Flame className="w-5 h-5 text-blue-500" />
            <span className="text-xs text-gray-500 font-medium">Sequência</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">{stats.studyStreak}</p>
          <p className="text-sm text-gray-600 mt-1">Dias seguidos</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
          <div className="flex items-center justify-between mb-2">
            <Clock className="w-5 h-5 text-blue-500" />
            <span className="text-xs text-gray-500 font-medium">Tempo</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">{stats.totalHours}h</p>
          <p className="text-sm text-gray-600 mt-1">De estudo</p>
        </div>
      </div>

      {/* Progress Chart */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-blue-500" />
          Seu Progresso Semanal
        </h3>
        <div className="space-y-3">
          {["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"].map((day, idx) => {
            const value = [45, 60, 38, 75, 55, 30, 65][idx];
            return (
              <div key={day} className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-600 w-8">{day}</span>
                <div className="flex-1 bg-gray-100 rounded-full h-3 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full transition-all duration-500"
                    style={{ width: `${value}%` }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-900 w-12 text-right">{value}%</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Clock className="w-5 h-5 text-blue-500" />
          Atividade Recente
        </h3>
        <div className="space-y-3">
          {recentActivity.map((activity, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <div>
                <p className="font-semibold text-gray-900">{activity.subject}</p>
                <p className="text-sm text-gray-600">{activity.questions} questões • {activity.correct} acertos</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">{activity.time}</p>
                <div className="flex items-center gap-1 mt-1">
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-medium text-blue-500">
                    {Math.round((activity.correct / activity.questions) * 100)}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderLibrary = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-2">Biblioteca de Questões</h2>
        <p className="text-blue-100">Milhares de questões organizadas por disciplina</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {subjects.map((subject) => (
          <div 
            key={subject.id}
            onClick={() => setSelectedSubject(subject.id)}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">{subject.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{subject.questions} questões</p>
              </div>
              <div className={`w-12 h-12 ${subject.color} rounded-xl flex items-center justify-center`}>
                <BookOpen className="w-6 h-6 text-white" />
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Progresso</span>
                <span className="font-semibold text-blue-500">{subject.progress}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                <div 
                  className={`${subject.color} h-full rounded-full transition-all duration-500`}
                  style={{ width: `${subject.progress}%` }}
                />
              </div>
            </div>

            <button className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-xl transition-colors flex items-center justify-center gap-2">
              Praticar Agora
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {selectedSubject && (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Questão de Exemplo</h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Qual é o resultado da equação: 2x + 5 = 15?
            </p>
            <div className="space-y-2">
              {["x = 5", "x = 7", "x = 10", "x = 15"].map((option, idx) => (
                <button
                  key={idx}
                  className="w-full text-left p-4 rounded-xl border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all"
                >
                  <span className="font-medium text-gray-900">{String.fromCharCode(65 + idx)}) {option}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderChat = () => (
    <div className="h-[calc(100vh-12rem)] flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100">
      <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-blue-500 to-blue-600 rounded-t-2xl">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <Brain className="w-6 h-6" />
          Chat com IA
        </h2>
        <p className="text-blue-100 text-sm mt-1">Tire suas dúvidas em tempo real</p>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {chatMessages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] p-4 rounded-2xl ${
                msg.role === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-900"
              }`}
            >
              <p className="text-sm leading-relaxed">{msg.content}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 border-t border-gray-100">
        <div className="flex gap-3">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Digite sua dúvida..."
            className="flex-1 px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
          />
          <button
            onClick={handleSendMessage}
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition-colors flex items-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            Enviar
          </button>
        </div>
      </div>
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-2">Análise de Desempenho</h2>
        <p className="text-blue-100">Acompanhe sua evolução detalhada</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-blue-500" />
            Desempenho por Disciplina
          </h3>
          <div className="space-y-4">
            {subjects.slice(0, 4).map((subject) => (
              <div key={subject.id}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">{subject.name}</span>
                  <span className="text-sm font-bold text-blue-500">{subject.progress}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div 
                    className={`${subject.color} h-full rounded-full transition-all duration-500`}
                    style={{ width: `${subject.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-blue-500" />
            Pontos Fortes e Fracos
          </h3>
          <div className="space-y-4">
            <div className="p-4 bg-green-50 rounded-xl border border-green-200">
              <p className="font-semibold text-green-900 mb-1">✅ Pontos Fortes</p>
              <p className="text-sm text-green-700">Português, História</p>
            </div>
            <div className="p-4 bg-orange-50 rounded-xl border border-orange-200">
              <p className="font-semibold text-orange-900 mb-1">⚠️ Precisa Melhorar</p>
              <p className="text-sm text-orange-700">Física, Química</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
              <p className="font-semibold text-blue-900 mb-1">💡 Recomendação</p>
              <p className="text-sm text-blue-700">Foque 30min/dia em Física para melhorar</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <PlayCircle className="w-5 h-5 text-blue-500" />
          Vídeos Motivacionais
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: "Como estudar melhor", duration: "8:45" },
            { title: "Técnicas de memorização", duration: "12:30" },
            { title: "Gestão do tempo", duration: "6:15" }
          ].map((video, idx) => (
            <div key={idx} className="relative group cursor-pointer">
              <div className="aspect-video bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                <PlayCircle className="w-12 h-12 text-white" />
              </div>
              <p className="mt-2 font-semibold text-gray-900">{video.title}</p>
              <p className="text-sm text-gray-600">{video.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-white">
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-5xl">
            🦉
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-2">Seu Perfil</h2>
            <p className="text-blue-100">Acompanhe sua jornada de estudos</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-blue-500" />
            Conquistas
          </h3>
          <div className="grid grid-cols-3 gap-3">
            {badges.map((badge) => (
              <div
                key={badge.id}
                className={`p-4 rounded-xl text-center transition-all ${
                  badge.unlocked
                    ? "bg-blue-50 border-2 border-blue-500"
                    : "bg-gray-100 border-2 border-gray-200 opacity-50"
                }`}
              >
                <div className="text-3xl mb-2">{badge.icon}</div>
                <p className="text-xs font-medium text-gray-700">{badge.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-blue-500" />
            Sua Mascote
          </h3>
          <div className="text-center">
            <div className="text-8xl mb-4">🦉</div>
            <p className="text-xl font-bold text-gray-900 mb-2">Corujinha Sábia</p>
            <p className="text-sm text-gray-600 mb-4">Nível 12 • 1.247 XP</p>
            <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full" style={{ width: "65%" }} />
            </div>
            <p className="text-xs text-gray-500 mt-2">650/1000 XP para próximo nível</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Flame className="w-5 h-5 text-blue-500" />
          Estatísticas Gerais
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-gray-50 rounded-xl">
            <p className="text-3xl font-bold text-blue-500 mb-1">12</p>
            <p className="text-sm text-gray-600">Dias de Streak</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-xl">
            <p className="text-3xl font-bold text-blue-500 mb-1">1.247</p>
            <p className="text-sm text-gray-600">Questões</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-xl">
            <p className="text-3xl font-bold text-blue-500 mb-1">78%</p>
            <p className="text-sm text-gray-600">Taxa de Acerto</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-xl">
            <p className="text-3xl font-bold text-blue-500 mb-1">45h</p>
            <p className="text-sm text-gray-600">Tempo Total</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                PrepExame
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-xl border border-orange-200">
                <Flame className="w-5 h-5 text-orange-500" />
                <span className="font-bold text-orange-600">{stats.studyStreak} dias</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar Navigation */}
          <nav className="md:w-64 space-y-2">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                activeTab === "dashboard"
                  ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Home className="w-5 h-5" />
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab("library")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                activeTab === "library"
                  ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <BookOpen className="w-5 h-5" />
              Biblioteca
            </button>
            <button
              onClick={() => setActiveTab("chat")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                activeTab === "chat"
                  ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <MessageSquare className="w-5 h-5" />
              Chat IA
            </button>
            <button
              onClick={() => setActiveTab("analytics")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                activeTab === "analytics"
                  ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <BarChart3 className="w-5 h-5" />
              Análise
            </button>
            <button
              onClick={() => setActiveTab("profile")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                activeTab === "profile"
                  ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <User className="w-5 h-5" />
              Perfil
            </button>
          </nav>

          {/* Content Area */}
          <main className="flex-1">
            {activeTab === "dashboard" && renderDashboard()}
            {activeTab === "library" && renderLibrary()}
            {activeTab === "chat" && renderChat()}
            {activeTab === "analytics" && renderAnalytics()}
            {activeTab === "profile" && renderProfile()}
          </main>
        </div>
      </div>
    </div>
  );
}


import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, TrendingUp, Award, Zap } from 'lucide-react';

interface SecurityScoreProps {
  score: number;
  level: string;
  onLevelUp?: () => void;
}

const SecurityScore: React.FC<SecurityScoreProps> = ({ score, level, onLevelUp }) => {
  const getShieldLevel = (score: number) => {
    if (score >= 90) return { level: 'Guardian Elite', color: 'text-purple-400 bg-purple-500/20 border-purple-500/30', icon: '🛡️⭐' };
    if (score >= 75) return { level: 'Shield Master', color: 'text-blue-400 bg-blue-500/20 border-blue-500/30', icon: '🛡️💎' };
    if (score >= 60) return { level: 'Defender', color: 'text-green-400 bg-green-500/20 border-green-500/30', icon: '🛡️⚡' };
    if (score >= 40) return { level: 'Guardian', color: 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30', icon: '🛡️' };
    return { level: 'Rookie', color: 'text-gray-400 bg-gray-500/20 border-gray-500/30', icon: '🛡️🌱' };
  };

  const shieldData = getShieldLevel(score);
  const nextLevelScore = Math.ceil(score / 15) * 15;
  const progressToNext = ((score % 15) / 15) * 100;

  return (
    <Card className="bg-black/20 backdrop-blur-lg border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5"></div>
      <CardHeader className="relative">
        <CardTitle className="flex items-center space-x-3 text-white">
          <div className="relative">
            <Shield className="h-6 w-6 text-cyan-400" />
            <div className="absolute -top-1 -right-1 text-xs">{shieldData.icon.slice(-1)}</div>
          </div>
          <span>Security Shield Level</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="relative space-y-4">
        {/* Main Score Display */}
        <div className="flex items-center justify-between">
          <div>
            <div className="text-3xl font-bold text-white">{score}</div>
            <Badge className={shieldData.color}>
              {shieldData.icon} {shieldData.level}
            </Badge>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-400">Next Level</div>
            <div className="text-lg font-semibold text-cyan-400">{nextLevelScore}</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Progress to next level</span>
            <span className="text-cyan-400">{Math.round(progressToNext)}%</span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-500"
              style={{ width: `${progressToNext}%` }}
            ></div>
          </div>
        </div>

        {/* Score Breakdown */}
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-4 w-4 text-green-400" />
            <span className="text-gray-400">Threats Blocked:</span>
            <span className="text-white font-medium">+25</span>
          </div>
          <div className="flex items-center space-x-2">
            <Award className="h-4 w-4 text-yellow-400" />
            <span className="text-gray-400">DAO Votes:</span>
            <span className="text-white font-medium">+15</span>
          </div>
          <div className="flex items-center space-x-2">
            <Zap className="h-4 w-4 text-purple-400" />
            <span className="text-gray-400">Reports:</span>
            <span className="text-white font-medium">+10</span>
          </div>
          <div className="flex items-center space-x-2">
            <Shield className="h-4 w-4 text-cyan-400" />
            <span className="text-gray-400">Wallet Age:</span>
            <span className="text-white font-medium">+8</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SecurityScore;
